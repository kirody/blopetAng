import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _localStorage: LocalstorageService,
    private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._localStorage.get('usuario')){
        console.log('Tienes acceso');
        return true;
      }else{
        console.log('No tienes acceso');
        this._router.navigate(['/login']);
        return false;
      }

    
  }
  
}

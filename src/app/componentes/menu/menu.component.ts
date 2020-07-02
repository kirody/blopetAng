import { Component, OnInit, Input } from '@angular/core';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  login: boolean;
  admin: boolean = false;
  email: any;
  nombre: any;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _localStorage: LocalstorageService) {
    //console.log(this._localStorage.get('usuario').email);
  }

  logout() {
    if (this._localStorage.get('usuario')) {
      this._localStorage.remove('usuario');
      this._localStorage.clear();
      window.location.reload();//Recarga la pagina
    }
  }

  ngOnInit(): void {
    if (this._localStorage.get('usuario')) {
      this.email = this._localStorage.get('usuario').email;
      this.nombre = this._localStorage.get('usuario').nombre;
      this.login = true;
      console.log('login: ' + this.login);
      if (this.email === 'admin@admin.com' || this.nombre === 'admin' ) {
        this.admin = true;
      }
    }
    else {
      this.login = false;
      console.log('login: ' + this.login);
    }
    //console.log(this._localStorage.get('usuario').hasOwnProperty('email'));
  }

}

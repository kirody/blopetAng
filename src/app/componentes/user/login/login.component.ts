import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LoginService } from 'src/app/servicios/login.service';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario = {
    email: null,
    password: null
  }

  constructor(
    private _loginService: LoginService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _localStorage: LocalstorageService
  ) {}

  ngOnInit(): void {
    
  }

  reloadPage(){
    window.location.reload();
  }

  login() {
    this._loginService.login(this.loginUsuario).subscribe(
      response => {
        if (response['code'] == 200) {
          this._router.navigate(['/home']);
          //this.reloadPage();//Recarga la pagina
          //Se almacena el usuario y contraseña en en localstorage 
          this._localStorage.set('usuario', this.loginUsuario);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  

}

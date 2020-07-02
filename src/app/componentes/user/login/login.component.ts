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
    nombre: null,
    email: null,
    password: null,
  }

  admin: boolean = false;

  constructor(
    private _loginService: LoginService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _localStorage: LocalstorageService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this._loginService.login(this.loginUsuario).subscribe(
      response => {
        if (response['code'] == 200) {
          this._router.navigate(['/home'])
          .then(() => {//si redirige a /home entonces recarga /home
            window.location.reload();
          });
          console.log(response);
          //console.log(response['data'][0].nombre);
          //console.log(response['data'][0].email);
          
          //Se almacena el usuario y contraseña en en localstorage 
          this._localStorage.set('usuario', response['data']);
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

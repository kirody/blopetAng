import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
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
  isError: boolean = false;

  constructor(
    private _loginService: LoginService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _localStorage: LocalstorageService,
    private _titleService: Title
  ) { }

  ngOnInit(): void {
    this._titleService.setTitle('Blopet | Inicio sesión');
  }

  login() {
    this._loginService.login(this.loginUsuario).subscribe(
      response => {
        if (response['code'] == 200) {
          this.isError = false;
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
          this.onIsError();
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}

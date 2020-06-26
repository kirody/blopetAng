import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: null,
    password: null
  }



  
  
  @Input() logueado: boolean;

  constructor(
    private _loginService: LoginService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
   }

  ngOnInit(): void {
  }

  loginUsuario() {
    this._loginService.loginUsuario(this.login).subscribe(
      response => {
        if (response['code'] == 200) {
          this._router.navigate(['/home']);
          this.logueado = true;
          console.log('Logueado: '+this.logueado);
        } else {
          this.logueado = false;
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  

  logout() {
    
  }

}

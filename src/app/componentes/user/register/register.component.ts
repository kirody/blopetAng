import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { GLOBAL } from 'src/app/servicios/global';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public usuario: Usuario;
  exists: boolean = false;
  
  constructor(
    private _usuarioService: UsuarioService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title
  ) {
    this.usuario = new Usuario(0,'','','');
   }

  ngOnInit(): void {
    this._titleService.setTitle('Blopet | Regístrate');
    console.log('register.components.ts cargado');
  }

  onSubmit() {
    this._usuarioService.addUsuario(this.usuario).subscribe(
      response => {
        if(response['code'] == 200){
          this._router.navigate(['/login']);
        }else{
          this.onExists();
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onExists(): void {
    this.exists = true;
    setTimeout(() => {
      this.exists = false;
    }, 4000);
  }

}

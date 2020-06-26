import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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

  constructor(
    private _usuarioService: UsuarioService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.usuario = new Usuario(0,'','','');
   }

  ngOnInit(): void {
    console.log('register.components.ts cargado');
  }

  onSubmit() {
    this._usuarioService.addUsuario(this.usuario).subscribe(
      response => {
        if(response['code'] == 200){
          this._router.navigate(['/login']);
        }else{
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

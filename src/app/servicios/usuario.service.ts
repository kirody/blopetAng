import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, XhrFactory } from '@angular/common/http';

import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string;

  constructor(
    public httpClient: HttpClient
  ) { 
    this.url = GLOBAL.url;
   }

   getUsuarios(): Observable<any> {
    return this.httpClient.get(this.url+'registro');
   }

   addUsuario(usuario: Usuario): Observable<any>{
    let json = JSON.stringify(usuario);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.httpClient.post(this.url+'registro', params, {headers: headers});
  }

}

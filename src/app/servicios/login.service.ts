import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, XhrFactory } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url: string;

  constructor(
    public httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

  login(login): Observable<any>{
    let json = JSON.stringify(login);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.httpClient.post(this.url+'login', params, {headers: headers});
  }
}

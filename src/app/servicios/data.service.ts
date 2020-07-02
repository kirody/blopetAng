import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, XhrFactory } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class DataService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = GLOBAL.url;
   }

  getAllAnimales(): Observable<any>{
    return this.httpClient.get<any[]>(this.url+'animales');
 }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, XhrFactory } from '@angular/common/http';

import { Animal } from '../models/animal';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public url: string;

  constructor(
    public httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   getAnimales(): Observable<any>{
      return this.httpClient.get(this.url+'animales');
   }

   addAnimal(animal: Animal): Observable<any>{
    let json = JSON.stringify(animal);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.httpClient.post(this.url+'animales', params, {headers: headers});
  }
}

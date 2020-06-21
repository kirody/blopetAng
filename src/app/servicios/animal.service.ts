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

   getAnimal(id){
    return this.httpClient.get(this.url+'animal/'+id);
  }

   addAnimal(animal: Animal): Observable<any>{
    let json = JSON.stringify(animal);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.httpClient.post(this.url+'animales', params, {headers: headers});
  }

  editAnimal(id, animal: Animal): Observable<any>{
    let json = JSON.stringify(animal);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.httpClient.post(this.url+'update-animal/'+id, params, {headers: headers});
 }

  deleteAnimal(id){
    return this.httpClient.get(this.url+'delete-animal/'+id);
 }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>){
    return new Promise((resolve, reject) => {
       var formData: any = new FormData();
       var xhr = new XMLHttpRequest();

       for(var i = 0; i < files.length; i++){
           formData.append('uploads[]', files[i], files[i].name);
       }

       xhr.onreadystatechange = function(){
           if(xhr.readyState == 4){
             if(xhr.status == 200){
                 resolve(JSON.parse(xhr.response));
             }else{
                 reject(xhr.response);
             }
           }
       };

       xhr.open("POST", url, true);
       xhr.send(formData);
    });
  }
}

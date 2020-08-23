import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, XhrFactory } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GLOBAL } from './global';
@Injectable({
  providedIn: 'root'
})
export class RazaPerroService {
  public url: string;

  constructor(
    public httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

  public razasPerro = [
    { id: 1, nomRaza: "Chihuahua" },
    { id: 2, nomRaza: "Pastor Alemán" },
    { id: 3, nomRaza: "Doberman" },
    { id: 4, nomRaza: "Labrador Retriever" },
    { id: 5, nomRaza: "Shar Pei" },
    { id: 6, nomRaza: "Mestizo" },
    { id: 7, nomRaza: "Bulldog" },
    { id: 8, nomRaza: "Beagle" },
    { id: 9, nomRaza: "Bóxer" },
    { id: 10, nomRaza: "Golden Retriever" },
    { id: 11, nomRaza: "Mastin Inglés" },
    { id: 12, nomRaza: "Husky Siberiano" },
    { id: 13, nomRaza: "Terranova" },
    { id: 14, nomRaza: "Bull Terrier" },
    { id: 15, nomRaza: "Shiba Inu" },
    { id: 16, nomRaza: "Yorkshire" },
    { id: 17, nomRaza: "Pinscher Miniatura" },
    { id: 18, nomRaza: "Dálmata" },
    { id: 19, nomRaza: "Pastor Belga" },
    { id: 20, nomRaza: "San Bernardo" },
    { id: 21, nomRaza: "Akita Inu" },
    { id: 22, nomRaza: "Samoyedo" },
    { id: 23, nomRaza: "Malamute de Alaska" },
    { id: 24, nomRaza: "Rottweiler" },
    { id: 25, nomRaza: "Border Collie" },
    { id: 26, nomRaza: "Bichón Maltés" },
    { id: 27, nomRaza: "Gran Danés" },
  ];

  getRazaPerro() : Observable<any>{
    return this.httpClient.get(this.url+'razas-perro');
  }

  getRazasPerro(){
    return this.razasPerro;
  }
}

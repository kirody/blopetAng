import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, XhrFactory } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class RazaGatoService {
  public url: string;

  constructor(
    public httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

  public razasGato = [
    { id: 1, nomRaza: "Gato persa" },
    { id: 2, nomRaza: "Bengala" },
    { id: 3, nomRaza: "Gato Siamés" },
    { id: 4, nomRaza: "Sphynx" },
    { id: 5, nomRaza: "British Shorthair" },
    { id: 6, nomRaza: "Ragdoll" },
    { id: 7, nomRaza: "Munchkin" },
    { id: 8, nomRaza: "Scottish Fold" },
    { id: 9, nomRaza: "Savannah" },
    { id: 10, nomRaza: "Azul ruso" },
    { id: 11, nomRaza: "Bosque de Noruega" },
    { id: 12, nomRaza: "Siberiano" },
    { id: 13, nomRaza: "Angora turco" },
    { id: 14, nomRaza: "Gato himalayo" },
    { id: 15, nomRaza: "Chartreux" },
    { id: 16, nomRaza: "American Shorthair" },
    { id: 17, nomRaza: "Singapura" },
    { id: 18, nomRaza: "Gato exótico" },
    { id: 19, nomRaza: "Bombay" },
    { id: 20, nomRaza: "Mestizo" },
    { id: 21, nomRaza: "Sagrado de Birmania" },
    { id: 22, nomRaza: "Gato común europeo" },
    { id: 23, nomRaza: "Abisinio" },
    { id: 24, nomRaza: "Peterbald" },
    { id: 25, nomRaza: "Toyger" },
    { id: 26, nomRaza: "Ragamuffin" },
    { id: 27, nomRaza: "Burmés" },
  ];

  getRazaGato() : Observable<any>{
    return this.httpClient.get(this.url+'razas-gato');
  }

  getRazasGato(){
    return this.razasGato;
  }
}

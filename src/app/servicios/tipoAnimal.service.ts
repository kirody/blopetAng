import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoAnimalService {
  public razas = [
    {id: 1, nomTipo: "Perro"},
    {id: 2, nomTipo: "Gato"}
  ];

  constructor() { }

  getRazas(){
    return this.razas;
  }
}

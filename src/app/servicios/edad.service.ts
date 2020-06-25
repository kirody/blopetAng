import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EdadService {
  public edades = [
    {id: 1, nomEdad: "De 1 a 3 meses"},
    {id: 2, nomEdad: "De 3 a 6 meses"},
    {id: 3, nomEdad: "De 9 a 12 meses"},
    {id: 4, nomEdad: "De 1 a 3 años"},
    {id: 5, nomEdad: "De 3 a 6 años"},
    {id: 6, nomEdad: "De 6 a 9 años"},
    {id: 7, nomEdad: "De 9 a 12 años"},
    {id: 8, nomEdad: "De 12 a 15 años"},
    {id: 9, nomEdad: "De 15 a 18 años"}
  ];

  constructor() { }

  getEdades(){
    return this.edades;
  }

}

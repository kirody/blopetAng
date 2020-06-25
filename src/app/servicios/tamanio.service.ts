import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TamanioService {
  public tamanios = [
    {id: 1, nomTamanio: "Muy pequeño (Menos de 4 kilos)"},
    {id: 2, nomTamanio: "Pequeño (Hasta 10 kilos)"},
    {id: 3, nomTamanio: "Mediano (Entre 11 y 25 kilos)"},
    {id: 4, nomTamanio: "Grande (Entre 26 y 44 kilos)"},
    {id: 5, nomTamanio: "Muy grande (Más de 45 kilos)"}
  ];
  constructor() { }

  getTamanios(){
    return this.tamanios;
  }
}

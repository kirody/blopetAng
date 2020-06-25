import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SexoService {
  public sexos = [
    {id: 1, nomSexo: "Hembra"},
    {id: 2, nomSexo: "Macho"}
  ];

  constructor() { }

  getSexos(){
    return this.sexos;
  }
}

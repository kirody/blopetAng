import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  public provincias = [
    { id: 1, nomProvincia: "Álava" },
    { id: 2, nomProvincia: "Albacete" },
    { id: 3, nomProvincia: "Alicante" },
    { id: 4, nomProvincia: "Almería" },
    { id: 5, nomProvincia: "Asturias" },
    { id: 6, nomProvincia: "Ávila" },
    { id: 7, nomProvincia: "Badajoz" },
    { id: 8, nomProvincia: "Barcelona" },
    { id: 9, nomProvincia: "Burgos" },
    { id: 10, nomProvincia: "Cáceres" },
    { id: 11, nomProvincia: "Cádiz" },
    { id: 12, nomProvincia: "Cantabria" },
    { id: 13, nomProvincia: "Castellón" },
    { id: 14, nomProvincia: "Ceuta" },
    { id: 15, nomProvincia: "Ciudad Real" },
    { id: 16, nomProvincia: "Córdoba" },
    { id: 17, nomProvincia: "Cuenca" },
    { id: 18, nomProvincia: "Girona" },
    { id: 19, nomProvincia: "Las Palmas" },
    { id: 20, nomProvincia: "Granada" },
    { id: 21, nomProvincia: "Guadalajara" },
    { id: 22, nomProvincia: "Guipúzcoa" },
    { id: 23, nomProvincia: "Huelva" },
    { id: 24, nomProvincia: "Huesca" },
    { id: 25, nomProvincia: "Islas Baleares" },
    { id: 26, nomProvincia: "Jaén" },
    { id: 27, nomProvincia: "Acoruña" },
    { id: 28, nomProvincia: "La Rioja" },
    { id: 29, nomProvincia: "León" },
    { id: 30, nomProvincia: "Lleida" },
    { id: 31, nomProvincia: "Lugo" },
    { id: 32, nomProvincia: "Madrid" },
    { id: 33, nomProvincia: "Málaga" },
    { id: 34, nomProvincia: "Melilla" },
    { id: 35, nomProvincia: "Murcia" },
    { id: 36, nomProvincia: "Navarra" },
    { id: 37, nomProvincia: "Ourense" },
    { id: 38, nomProvincia: "Palencia" },
    { id: 39, nomProvincia: "Pontevedra" },
    { id: 40, nomProvincia: "Salamanca" },
    { id: 41, nomProvincia: "Segovia" },
    { id: 42, nomProvincia: "Sevilla" },
    { id: 43, nomProvincia: "Soria" }
  ];

  constructor() { }

  getProvincias(){
    return this.provincias;
  }
}

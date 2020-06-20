import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from 'src/app/servicios/animal.service';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-animales-listado',
  templateUrl: './animales-listado.component.html',
  styleUrls: ['./animales-listado.component.css']
})
export class AnimalesListadoComponent implements OnInit {
  public animales: Animal[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
  ) { }

  ngOnInit(): void {
    console.log('animales-listado.component.ts cargado');
    this.getAnimales();
  }

  getAnimales() {
    this._animalService.getAnimales().subscribe(
      resultado => {

        if (resultado['code'] != 200) {
          console.log(resultado);
        } else {
          this.animales = resultado['data'];
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}

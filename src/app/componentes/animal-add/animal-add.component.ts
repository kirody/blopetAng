import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AnimalService } from 'src/app/servicios/animal.service';
import { Animal } from 'src/app/models/animal';
import { GLOBAL } from 'src/app/servicios/global';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit {
  public animal: Animal;

  constructor(
    private _animalService: AnimalService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.animal = new Animal(0,'',0,'','','','','');
  }

  ngOnInit(): void {
    console.log('animal-add.components.ts cargado');
  }

  onSubmit() {
    this._animalService.addAnimal(this.animal).subscribe(
      response => {
        if(response['code'] == 200){
          this._router.navigate(['/animales']);
        }else{
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}

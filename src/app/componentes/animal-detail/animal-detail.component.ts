import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AnimalService } from 'src/app/servicios/animal.service';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  public animal: Animal;

  constructor(
    private _animalService: AnimalService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    console.log('animal-detail.component.ts cargado')
    this.getAnimal();
  }

  getAnimal(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._animalService.getAnimal(id).subscribe(
        response => {
          if(response['code'] == 200){
              this.animal = response['data'];
          }else{
              this._router.navigate(['/animales']);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
}

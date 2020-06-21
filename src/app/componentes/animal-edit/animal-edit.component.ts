import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalesListadoComponent } from '../animales-listado/animales-listado.component';
import { AnimalService } from 'src/app/servicios/animal.service';
import { Animal } from '../../models/animal';
import { GLOBAL } from 'src/app/servicios/global';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {
  public animal: Animal;
  public filesToUpload;
  public resultUpload;
  public is_edit;

  constructor(
    private _animalService: AnimalService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.animal = new Animal(0,'','','','','','','','','','');
    this.is_edit = true;
  }

  ngOnInit(): void {
    console.log('Este edit-animal-listado.component.ts cargado');
    this.getAnimal();
  }

  getAnimal() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._animalService.getAnimal(id).subscribe(
        response => {
          if (response['code'] == 200) {
            this.animal = response['data'];
          } else {
            this._router.navigate(['/animales']);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  onSubmit() {
    console.log(this.animal);

    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this._animalService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
        console.log(result);
        
        this.resultUpload = result;
        this.animal.imagen = this.resultUpload.filename;
        this.updateAnimal();

      }, (error) => {
        console.log(error);
      });
    } else {
      this.updateAnimal();
    }
  }

  updateAnimal() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._animalService.editAnimal(id, this.animal).subscribe(
        resultado => {
          if (resultado['code'] == 200) {
            this._router.navigate(['/animal', id]);
          } else {
            console.log(resultado);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}

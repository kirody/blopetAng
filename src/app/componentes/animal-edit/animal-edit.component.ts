import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
//Servicios
import { AnimalService } from 'src/app/servicios/animal.service';
import { TipoAnimalService } from 'src/app/servicios/tipoAnimal.service';
import { ProvinciaService } from 'src/app/servicios/provincia.service';
import { TamanioService } from 'src/app/servicios/tamanio.service';
import { EdadService } from 'src/app/servicios/edad.service';
import { SexoService } from 'src/app/servicios/sexo.service';
import { RazaPerroService } from 'src/app/servicios/raza-perro.service';

import { GLOBAL } from 'src/app/servicios/global';
import { Animal } from '../../models/animal';

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

  public tipoAnimal: any[] = [];
  public provincias: any[] = [];
  public tamanios: any[] = [];
  public edades: any[] = [];
  public sexos: any[] = [];
  public razasPerro: any[] = [];

  tipoSeleccionado: number = 0;

  constructor(
    private _animalService: AnimalService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _tipoAanimalService: TipoAnimalService,
    private _provinciaService: ProvinciaService,
    private _tamanioService: TamanioService,
    private _edadService: EdadService,
    private _sexoService: SexoService,
    private _razaPerroService: RazaPerroService,
    private _titleService: Title
  ) {
    this.animal = new Animal(0,'','','','','','','','','','','','','');
    this.tipoAnimal = _tipoAanimalService.getRazas();
    this.provincias = _provinciaService.getProvincias();
    this.tamanios = _tamanioService.getTamanios();
    this.edades = _edadService.getEdades();
    this.sexos = _sexoService.getSexos();
    this.razasPerro = _razaPerroService.getRazasPerro();
    this.is_edit = true;
  }

  ngOnInit(): void {
    this._titleService.setTitle('Blopet | Editar mascota');
    console.log('Este animal-edit.component.ts cargado');
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

  goBack() {
    window.history.back();
  }

}

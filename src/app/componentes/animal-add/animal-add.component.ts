import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Servicios
import { AnimalService } from 'src/app/servicios/animal.service';
import { TipoAnimalService } from 'src/app/servicios/tipoAnimal.service';
import { ProvinciaService } from 'src/app/servicios/provincia.service';
import { TamanioService } from 'src/app/servicios/tamanio.service';
import { EdadService } from 'src/app/servicios/edad.service';
import { SexoService } from 'src/app/servicios/sexo.service';
import { RazaPerroService } from 'src/app/servicios/raza-perro.service';
import { GLOBAL } from 'src/app/servicios/global';

import { Animal } from 'src/app/models/animal';


@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit {
  public animal: Animal;
  public filesToUpload;
  public resultUpload;

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
    private _razaPerroService: RazaPerroService
  ) {
    this.animal = new Animal(0,'','','','','','','','','','');
    this.tipoAnimal = _tipoAanimalService.getRazas();
    this.provincias = _provinciaService.getProvincias();
    this.tamanios = _tamanioService.getTamanios();
    this.edades = _edadService.getEdades();
    this.sexos = _sexoService.getSexos();
    this.razasPerro = _razaPerroService.getRazasPerro().sort();
  }

  ngOnInit(): void {
    
    console.log('animal-add.components.ts cargado');
  }

  onSubmit() {
    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this._animalService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
        console.log(result);
        this.resultUpload = result;
        this.animal.imagen = this.resultUpload.filename;
        this.saveAnimal();

      }, (error) => {
        console.log(error);
      });
    } else {
      this.saveAnimal();
    }
  }

  saveAnimal(){
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

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
}

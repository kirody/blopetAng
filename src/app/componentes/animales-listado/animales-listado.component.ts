import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalService } from 'src/app/servicios/animal.service';
import { Animal } from '../../models/animal';
import { Title } from '@angular/platform-browser';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';

@Component({
  selector: 'app-animales-listado',
  templateUrl: './animales-listado.component.html',
  styleUrls: ['./animales-listado.component.css']
})
export class AnimalesListadoComponent implements OnInit {
  public animales: Animal[];
  public numAnimales: number;
  public confirmado;
  pageActual: number = 1;

  email: any;
  admin: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
    private _localStorage: LocalstorageService,
    private _titleService: Title
  ) { }

  ngOnInit(): void {
    this._titleService.setTitle('Blopet | Mascotas');
    console.log('animales-listado.component.ts cargado');
    this.getAnimales();


    if (this.email = this._localStorage.get('usuario')) {
      if (this.email[0].email === 'admin@admin.com') {
        this.admin = true;
      }
    }
  }

  getAnimales() {
    this._animalService.getAnimales().subscribe(
      resultado => {
        if (resultado['code'] != 200) {
          console.log(resultado);
        } else {
          this.animales = resultado['data'];
          this.numAnimales = this.animales.length;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  borrarConfirm(id) {
    this.confirmado = id;
  }

  cancelarConfirm() {
    this.confirmado = null;
  }

  onDeleteAnimal(id) {
    this._animalService.deleteAnimal(id).subscribe(
      response => {
        if (response['code'] == 200) {
          this.getAnimales();
        } else {
          alert('Error al borrar el animal');
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  goBack() {
    window.history.back();
  }

}

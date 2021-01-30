import { Animal } from 'src/app/models/animal';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProvinciaService } from 'src/app/servicios/provincia.service';
import { AnimalService } from 'src/app/servicios/animal.service';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {
  public provincias: Animal[];
  public animales: Animal[];
  public numAnimales: number;
  public confirmado;
  opcionSeleccionada: string  = '0';
  verSeleccion: string = '';
  email: any;
  admin: boolean = false;
  pageActual: number = 1;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _provinciasService: ProvinciaService,
    private _animalService: AnimalService,
    private _localStorage: LocalstorageService,
    private _titleService: Title
  ) { }
  

  ngOnInit(): void {
    this._titleService.setTitle('Blopet | Perros');
    this.getProvincias();

    if (this.email = this._localStorage.get('usuario')) {
      if (this.email[0].email === 'admin@admin.com') {
        this.admin = true;
      }
    }
  }

  getProvincias() {
    this._provinciasService.getProvincia().subscribe(
      resultado => {
        if (resultado['code'] != 200) {
          console.log(resultado);
        } else {
          this.provincias = resultado['data'];
          this.numAnimales = this.provincias.length;
          console.log(resultado);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onClick() {
    console.log();
  }

}

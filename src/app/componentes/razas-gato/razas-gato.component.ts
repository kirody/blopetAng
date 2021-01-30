import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Animal } from '../../models/animal';
import { RazaGatoService } from 'src/app/servicios/raza-gato.service';
import { AnimalService } from 'src/app/servicios/animal.service';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
@Component({
  selector: 'app-razas-gato',
  templateUrl: './razas-gato.component.html',
  styleUrls: ['./razas-gato.component.css']
})
export class RazasGatoComponent implements OnInit {
  public animales: Animal[];
  public numAnimales: number;
  public confirmado;

  email: any;
  admin: boolean = false;
  pageActual: number = 1;
  botonLista: string;
  iconoLista: string;
  isLista: boolean;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _razasGatoService: RazaGatoService,
    private _animalService: AnimalService,
    private _localStorage: LocalstorageService,
    private _titleService: Title
  ) { }

  ngOnInit(): void {
    this._titleService.setTitle('Blopet | Gatos');
    this.getRazasGato();

    if (this.email = this._localStorage.get('usuario')) {
      if (this.email[0].email === 'admin@admin.com') {
        this.admin = true;
      }
    }
    this.botonLista = 'Vista lista';
    this.iconoLista = '../../../assets/icons/icon-list.png';
  }

  getRazasGato() {
    this._razasGatoService.getRazaGato().subscribe(
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

  borrarConfirm(id){
    this.confirmado = id;
  }

  cancelarConfirm(){
    this.confirmado = null;
  }

  onDeleteAnimal(id){
    this._animalService.deleteAnimal(id).subscribe(
      response => {
          if(response['code'] == 200){
            this.getRazasGato();
          }else{
            alert('Error al borrar el animal');
          }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  goBack() {
    window.history.back();
  }

  clickBotonLista() {
    this.isLista = !this.isLista;
    if (this.isLista) {
      this.botonLista = 'Vista cuadrícula';
      this.iconoLista = '../../../assets/icons/icon-mosaic.png'
    }else {
      this.botonLista = 'Vista lista';
      this.iconoLista = '../../../assets/icons/icon-list.png';
    }
  }
}

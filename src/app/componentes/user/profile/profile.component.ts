import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: any;
  nombre: any;
  constructor(private _localStorage: LocalstorageService) { }

  ngOnInit(): void {
    if (this._localStorage.get('usuario')) {
      this.email = this._localStorage.get('usuario')[0].email;
      this.nombre = this._localStorage.get('usuario')[0].nombre;
    }
  }
}

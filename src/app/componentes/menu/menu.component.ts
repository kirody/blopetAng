import { Component, OnInit, Input } from '@angular/core';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  login: boolean;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _localStorage: LocalstorageService) {
  }

  loginIn() {
    if (this._localStorage.get('usuario')) {
      this.login = true;
      console.log('login: ' + this.login);
    }
    else {
      this.login = false;
      console.log('login: ' + this.login);
    }
  }

  logout() {
    if (this._localStorage.get('usuario')) {
      this._localStorage.remove('usuario')
      this.reloadPage();//Recarga la pagina
    }

  }

  reloadPage() {
    window.location.reload();
  }
  ngOnInit(): void {
  }

}

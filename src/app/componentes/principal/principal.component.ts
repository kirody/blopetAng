import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public load: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 1500);
  }

}

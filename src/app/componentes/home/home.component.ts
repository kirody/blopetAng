import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public param: string;
  constructor(private _titleService: Title) { }

  ngOnInit(): void {
    this._titleService.setTitle('Blopet | Inicio');
  }
    
    
  }
  
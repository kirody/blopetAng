import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  public data$: Observable<any[]>;

  public keyword = 'nombre';
  public keywords = ['nombre','edad','sexo','raza','provincia'];
  
  public param: string;
  constructor(private dataSVC: DataService,
              private _titleService: Title) { }

  ngOnInit(): void {
    this._titleService.setTitle('Blopet | Inicio');
    this.getData();
  }

    getData() {
      this.dataSVC.getAllAnimales().subscribe(
        resultado => {
            this.data$ = resultado['data'];
           // if(this.keyword == 'nombre'){
             // this.data$ = _.uniqBy(this.data$, 'nombre');
            //}
            //console.log(this.data$);
        },
      );
    }

    selectEvent(item) {
      // do something with selected item
    }
   
    onChangeSearch(val: string) {
      // fetch remote data from here
      // And reassign the 'data' which is binded to 'data' property.
    }
    
    onFocused(e){
      // do something when input is focused
    }
    
    
  }
  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { AnimalesListadoComponent } from './componentes/animales-listado/animales-listado.component';
import { AnimalAddComponent } from './componentes/animal-add/animal-add.component';

//Servicios
import { AnimalService } from 'src/app/servicios/animal.service';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AnimalesListadoComponent,
    AnimalAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AnimalService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
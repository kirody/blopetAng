import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { AnimalesListadoComponent } from './componentes/animales-listado/animales-listado.component';
import { AnimalAddComponent } from './componentes/animal-add/animal-add.component';
import { AnimalDetailComponent } from './componentes/animal-detail/animal-detail.component';
import { AnimalEditComponent } from './componentes/animal-edit/animal-edit.component';
import { RegisterComponent } from './componentes/user/register/register.component';

//Servicios
import { AnimalService } from 'src/app/servicios/animal.service';
import { LoginService } from 'src/app/servicios/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AnimalesListadoComponent,
    AnimalAddComponent,
    AnimalDetailComponent,
    AnimalEditComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AnimalService, LoginService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }

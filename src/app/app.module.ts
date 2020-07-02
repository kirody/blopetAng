import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

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
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
import { UniquePipe } from './pipes/unique.pipe';

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
    RegisterComponent,
    UniquePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule
  ],
  providers: [AnimalService, LoginService, LocalstorageService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }

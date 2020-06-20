import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AnimalesListadoComponent } from './componentes/animales-listado/animales-listado.component';
import { AnimalAddComponent } from './componentes/animal-add/animal-add.component';


const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'animales', component: AnimalesListadoComponent},
  {path: 'crear-animal', component: AnimalAddComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AnimalesListadoComponent } from './componentes/animales-listado/animales-listado.component';
import { AnimalAddComponent } from './componentes/animal-add/animal-add.component';
import { AnimalDetailComponent } from './componentes/animal-detail/animal-detail.component';
import { AnimalEditComponent } from './componentes/animal-edit/animal-edit.component';
import { RegisterComponent } from './componentes/user/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'animales', component: AnimalesListadoComponent},
  {path: 'crear-animal', component: AnimalAddComponent},
  {path: 'animal/:id', component: AnimalDetailComponent},
  {path: 'editar-animal/:id', component: AnimalEditComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

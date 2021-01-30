import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/user/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { HomeComponent } from './componentes/home/home.component';
import { AnimalesListadoComponent } from './componentes/animales-listado/animales-listado.component';
import { AnimalAddComponent } from './componentes/animal-add/animal-add.component';
import { AnimalDetailComponent } from './componentes/animal-detail/animal-detail.component';
import { AnimalEditComponent } from './componentes/animal-edit/animal-edit.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { RazasGatoComponent } from './componentes/razas-gato/razas-gato.component';
import { RazasPerroComponent } from './componentes/razas-perro/razas-perro.component';
import { ProfileComponent } from './componentes/user/profile/profile.component';
import { ProvinciasComponent } from './componentes/provincias/provincias.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent,},
  {path: 'animales', component: AnimalesListadoComponent},
  {path: 'crear-animal', component: AnimalAddComponent, canActivate: [AuthGuard]},
  {path: 'animal/:id', component: AnimalDetailComponent},
  {path: 'editar-animal/:id', component: AnimalEditComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'razas-gatos', component: RazasGatoComponent},
  {path: 'razas-perros', component: RazasPerroComponent},
  {path: 'perfil', component: ProfileComponent},
  {path: 'provincias', component: ProvinciasComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

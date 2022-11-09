import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/components/contactos/contactos.component';
import { InicioComponent } from './components/components/inicio/inicio.component';
import { LoginComponent } from './components/components/login/login.component';
import { RegistroComponent } from './components/components/registro/registro.component';

const routes: Routes = [
    // {path: '', component: // nom de la classComponent}
    {path :'', component: InicioComponent},
    {path :'login', component: LoginComponent},
    {path :'contactos', component: ContactosComponent},
    {path :'registro', component: RegistroComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

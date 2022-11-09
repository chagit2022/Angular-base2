import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/components/inicio/inicio.component';
import { RegistroComponent } from './components/components/registro/registro.component';
import { LoginComponent } from './components/components/login/login.component';
import { ContactosComponent } from './components/components/contactos/contactos.component';
import { NavbarComponent } from './components/components/navbar/navbar.component';
import { FooterComponent } from './components/components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    ContactosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// s'il faut supprimer un dossier ...songer a effacer la ligne correspondant dans DECLARATION,
// l'IMPORT, et le DOSSIER a effacer

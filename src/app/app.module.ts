import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SessionService } from './session.service';
import { SpotifyService } from './spotify.service';
import { PlayerService } from './player.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { UsuarioEstadoComponent } from './usuario-estado/usuario-estado.component';
import { BuscarCancionesComponent } from './buscar-canciones/buscar-canciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    NavegacionComponent,
    UsuarioEstadoComponent,
    BuscarCancionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: 'buscar',
        component: BuscarCancionesComponent
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    SessionService,
    SpotifyService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

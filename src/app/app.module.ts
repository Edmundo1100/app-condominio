import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,

    UsuariosModule,
  ],
  bootstrap: [AppComponent],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  // ],
})
export class AppModule { }

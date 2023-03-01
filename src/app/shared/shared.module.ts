import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// PRIMENG
import { InputTextModule } from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [
    ReactiveFormsModule,

    // PRIMENG
    InputTextModule,
    FontAwesomeModule,
    PanelModule,
    ButtonModule
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  // ],

})
export class SharedModule { }

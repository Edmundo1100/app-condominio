import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

// PRIMENG
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [
    ReactiveFormsModule,

    // PRIMENG
    InputTextModule
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  // ],

})
export class SharedModule { }

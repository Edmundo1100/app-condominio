import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// PRIMENG
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextModule
  ],
  exports: [
    ReactiveFormsModule,
    
    //PIPES
    FilterPipe,

    // PRIMENG
    InputTextModule,
    FontAwesomeModule,
    PanelModule,
    ButtonModule,
    FormsModule,


  ],
})
export class SharedModule { }

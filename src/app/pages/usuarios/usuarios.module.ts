import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from '../../shared/shared.module';

// MATERIAL
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
// import { MatButtonModule } from '@angular/material/button';
// import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,

   // MATERIAL
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    // MatButtonModule,
    // MatInputModule

  ]
})
export class UsuariosModule { }

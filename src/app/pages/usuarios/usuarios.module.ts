import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CadastroUsuariosComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class UsuariosModule { }

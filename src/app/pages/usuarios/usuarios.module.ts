import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../services/interceptors/token.interceptor';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';



@NgModule({
  declarations: [
    CadastroUsuariosComponent,
    ListarUsuariosComponent,
  ],
  imports: [
    SharedModule
  ],

})
export class UsuariosModule { }

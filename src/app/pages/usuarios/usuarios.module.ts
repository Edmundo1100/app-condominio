import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from '../../shared/shared.module';
import { CadatrarUsuarioComponent } from './cadatrar-usuario/cadatrar-usuario.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    CadatrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
  

  ]
})
export class UsuariosModule { }

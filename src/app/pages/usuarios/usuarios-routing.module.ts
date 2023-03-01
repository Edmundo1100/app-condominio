import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadatrarUsuarioComponent } from './cadatrar-usuario/cadatrar-usuario.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'cadastrarUsuario', component: CadatrarUsuarioComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';

// PRIMENG
import {MenubarModule} from 'primeng/menubar';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SharedModule } from '../../shared/shared.module';
import {PanelMenuModule} from 'primeng/panelmenu';
import { PainelMenuComponent } from './painel-menu/painel-menu.component';



const telas = [
  PrincipalComponent,
  MenuBarComponent
]

@NgModule({
  declarations: [...telas, PainelMenuComponent],
  exports: [...telas],
  imports: [
    CommonModule,
    SharedModule,
    MenubarModule,
    PanelMenuModule
  ]
})
export class PrincipalModule { }

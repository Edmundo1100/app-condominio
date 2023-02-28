import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// ICONS 
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  // ICONS
  faCoffee = faCoffee;




}

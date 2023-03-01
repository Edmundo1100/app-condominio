import { UsuarioService } from './../../services/usuario.service';
import { MensagemService } from './../../services/mensagem.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
export class UsuariosComponent implements OnInit {

  usuarios!: any;

  constructor(
    private alerta: MensagemService,
    private usuarioService: UsuarioService
  ) { }


  ngOnInit(): void {

    this.getUsuarios();
  }

  private getUsuarios() {
    this.usuarioService.listarTodos().subscribe({
      next: value => this.montarUsuarios(value.response),
      error: (error: any) => this.alerta.error(error.error.response),
    })
  }

  montarUsuarios(usuarios: any) {    
    this.usuarios = usuarios;
    this.alerta.success('ok');
  }

}

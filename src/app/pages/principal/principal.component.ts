import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  menuAberto: boolean = true;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }
  ngOnInit(): void {
  }


  deslogar() {
    this.usuarioService.deslogar();
  }

}

import { Router , NavigationEnd  } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  menuAberto: boolean = true;
  menuOpen = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false;
      }
    });
  }
  ngOnInit(): void {
  }


  deslogar() {
    this.usuarioService.deslogar();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  isLinkActive(link: string) {
    return this.router.isActive(link, false);
  }

}

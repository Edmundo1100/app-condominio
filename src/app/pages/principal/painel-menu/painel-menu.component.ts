import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-painel-menu',
  templateUrl: './painel-menu.component.html',
  styleUrls: ['./painel-menu.component.scss']
})
export class PainelMenuComponent {
  items!: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Usuários',
        icon: 'fa-solid fa-users',
        routerLink: [''],
        items: [
          {
            label: 'Listar Usuários',
            icon: 'fa-solid fa-users-between-lines',
            routerLink: ['usuarios']
          },
          {
            label: 'Novo Usuário',
            icon: 'fa-solid fa-user-plus',
            routerLink: ['']
          },
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-times',
        routerLink: ['']
      }
    ];
  }
}

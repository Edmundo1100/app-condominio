import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-painel-menu',
  templateUrl: './painel-menu.component.html',
  styleUrls: ['./painel-menu.component.scss']
})
export class PainelMenuComponent {
  items!: MenuItem[];
  faCoffee = faCoffee;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Usuários',
        icon: 'fa fa-coffee',
        items: [
          {
            label: 'Listar',
            icon: 'pi pi-coffee',
            routerLink: ['usuarios']
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'User', icon: 'pi pi-fw pi-user-plus' },
              { label: 'Filter', icon: 'pi pi-fw pi-filter' }
            ]
          },
          { separator: true },
          {
            label: 'Quit',
            icon: 'pi pi-fw pi-times',
            command: () => {
              this.router.navigate(['']);
            }
          }
        ]
      }
    ];
  }
}

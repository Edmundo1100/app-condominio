import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoadingService } from './services/loading-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app-condominio';
  loading: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    //loading
    this.loadingService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    //para lazy loading
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Se a navegação começar, exibe o carregamento global.
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        // Se a navegação for concluída com sucesso, oculta o carregamento global.
        this.loading = false;
      }
    });
  }

}

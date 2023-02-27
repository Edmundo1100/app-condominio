import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  menuAberto: boolean = true;

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }




}

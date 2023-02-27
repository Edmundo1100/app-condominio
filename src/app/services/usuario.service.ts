import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/IUsuario';

const apiUrlUsuario = environment.apiUrl + "usuarios";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  logar(usuario: IUsuario): Observable<any> {
    return this.httpClient.post<any>(apiUrlUsuario + "/login", usuario).pipe(
      tap((resposta) => {
        localStorage.setItem('token', window.btoa(JSON.stringify(resposta.response['token'])));
        localStorage.setItem('usuario', window.btoa(JSON.stringify(usuario)));
        this.router.navigate(['']);
      }));
  }

  salvar(usuario: IUsuario): Observable<any> {
    return this.httpClient.post<any>(apiUrlUsuario + "/cadastrar", usuario)
  }

  // deslogar() {
  //   localStorage.clear();
  //   this.router.navigate(['login']);
  // }

  // obterUsuarioLogado() {
  //   const usuario = localStorage.getItem('usuario');
  //   if (usuario) {
  //     const decodedUsuario = JSON.parse(window.atob(usuario));
  //     return decodedUsuario;
  //   } else {
  //     return null;
  //   }
  // }


  // get obterIdUsuarioLogado() {
  //   const usuario = localStorage.getItem('usuario')
  //   if (usuario) {
  //     return (JSON.parse(window.atob(usuario)) as IUsuario).id;
  //   } else {
  //     return null;
  //   }
  // }

  // get obterTokenUsuario(): string | null {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     return JSON.parse(window.atob(token))
  //   } else {
  //     return null;
  //   }
  // }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}


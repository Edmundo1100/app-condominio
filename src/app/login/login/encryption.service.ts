import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private apiUrl = 'http://localhost:3000/api'; // Altere para a URL da sua API

  constructor(private http: HttpClient) { }

  // Método que criptografa a senha usando a biblioteca CryptoJS
  // encryptPassword(password: string): string {
  //   const key = 'chave-de-criptografia'; // Altere para a sua chave de criptografia
  //   const encryptedPassword = CryptoJS.AES.encrypt(password, key).toString();
  //   return encryptedPassword;
  // }

  // Método que envia a senha criptografada para a API
  // sendEncryptedPassword(encryptedPassword: string): Observable<any> {
  //   const url = `${this.apiUrl}/users`;
  //   const body = { password: encryptedPassword };
  //   return this.http.post(url, body);
  // }
}

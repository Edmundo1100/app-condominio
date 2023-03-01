import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
 
  
  constructor(private messageService: MessageService) { }

 
  success(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: message });
  }

  info(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Informação', detail: message });
  }

  error(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: message });
  }

  warning(message: string) {
    this.messageService.add({ severity: 'warn', summary: 'Cuidado!', detail: message });
  }

  
}

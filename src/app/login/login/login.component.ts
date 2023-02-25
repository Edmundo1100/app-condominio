import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EncryptionService } from './encryption.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public formLogin!: FormGroup;
  public password!: string;

  constructor(
    private encryptionService: EncryptionService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      senha: ['']
    });
    console.log('entrou');
    
  }

  // onSubmit() {
  //   const encryptedPassword = this.encryptionService.encryptPassword(this.password);
  //   this.encryptionService.sendEncryptedPassword(encryptedPassword).subscribe(
  //     res => console.log('Senha criptografada enviada com sucesso!'),
  //     err => console.log('Erro ao enviar senha criptografada', err)
  //   );
  // }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.formLogin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  logar() {
    if (this.formLogin.invalid) return;

    var usuario = this.formLogin.getRawValue() as IUsuario;
    this.usuarioService.logar(usuario).subscribe((response) => {
      if (!response.sucesso) {
        console.log('erro');

        // this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
        //   duration: 3000
        // });
      }
    }, error => {
      console.log('erro');
    });
  }
}
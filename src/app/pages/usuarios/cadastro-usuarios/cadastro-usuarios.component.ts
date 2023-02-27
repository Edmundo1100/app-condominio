import { LoadingService } from './../../../services/loading-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { IUsuario } from '../../../interfaces/IUsuario';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  formUsuario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private load: LoadingService
  ) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.formUsuario = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  salvar() {
    if (this.formUsuario.invalid) return;
    this.load.show();
    var usuario = this.formUsuario.getRawValue() as IUsuario;
    this.usuarioService.salvar(usuario).subscribe({
      next: value => this.usuarioSalvoSucess(),
      error: error => this.alertaErro(error.error.response)
    })
  }

  usuarioSalvoSucess() {
    this.load.hide();
    this.snackBar.open('Sussesso', 'OK', {
      duration: 4000
    });

  }

  alertaErro(mensagem: any) {
    this.load.hide();
    this.snackBar.open('Erro', mensagem, {
      duration: 4000
    });
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from '../../../interfaces/IUsuario';
import { FormularioService } from '../../../services/formulario.service';
import { MensagemService } from '../../../services/mensagem.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-cadatrar-usuario',
  templateUrl: './cadatrar-usuario.component.html',
  styleUrls: ['./cadatrar-usuario.component.scss']
})
export class CadatrarUsuarioComponent {

  formUsuario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private formularioService: FormularioService,
    private alerta: MensagemService,
  ) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.formUsuario = this.formBuilder.group({
      usuario: [null, [Validators.required]],
      senha: [null, [Validators.required]],
    });
  }

  salvar() {
    this.formularioService.marcarCamposInvalidos(this.formUsuario)
    if (this.formUsuario.invalid) return;
    var usuario = this.formUsuario.getRawValue() as IUsuario;
    this.usuarioService.salvar(usuario).subscribe({
      next: value => this.usuarioSalvoSucess(),
      error: error => this.alerta.error(error.error.response)
    })
  }

  usuarioSalvoSucess() {
    this.alerta.success("Criado!!!")
    this.router.navigate(['home']);
  }
}

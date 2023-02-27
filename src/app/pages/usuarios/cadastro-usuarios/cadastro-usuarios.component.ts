import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { IUsuario } from '../../../interfaces/IUsuario';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  formUsuario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
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

  salvar(){
    if (this.formUsuario.invalid) return;
    var usuario = this.formUsuario.getRawValue() as IUsuario;
    this.usuarioService.salvar(usuario).subscribe({
      next: value => console.log(value),
      error: error => console.log(error.error.response),
    })
  }
  
}

import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent {

  formulario: FormGroup | any;

  constructor(private servicePessoa: PessoaService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomecompleto: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(12)
        ])
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      cpf: [
        '',
        Validators.compose([
          Validators.required

        ])
      ],
      endereco: [
        '',
        Validators.compose([
          Validators.required

        ])
      ]
    });
  }

  salvar(nomecompleto: string, email: string, cpf: string, endereco: string) {

    let pessoa = {
      nome: nomecompleto,
      email: email,
      cpf: cpf,
      endereco: endereco
    }

    this.servicePessoa.salvarPessoaNoBancoDeDados(pessoa).subscribe(resultado => {
      alert("Nova Pessoa Inserida");
      this.router.navigate(['/']);
    });


  }

}

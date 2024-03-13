import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  pessoaEmEdicao: any;
  idPessoa: number = 0;
  formulario: FormGroup | any;

  constructor(private servicePessoa: PessoaService, private rotaAtiva: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.idPessoa = this.rotaAtiva.snapshot.params['id'];
    this.buscarPessoaPorId(this.idPessoa);
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

  buscarPessoaPorId(id: number) {
    this.servicePessoa.getPessoaPorId(id).subscribe(resultado => {
      this.pessoaEmEdicao = resultado;

    });
  }

  editar(nomecompleto: string, email: string, cpf: string, endereco: string) {

    let pessoa = {
      nome: nomecompleto,
      email: email,
      cpf: cpf,
      endereco: endereco
    }

    this.servicePessoa.editarPessoaNoBancoDeDados(pessoa, this.idPessoa).subscribe(resultado => {
      alert ("Atualizado com Sucesso!");
      this.router.navigate(["/"]);

    });
  }

}

import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent {

  constructor(private servicePessoa: PessoaService) {}

  ngOnInit(): void {

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

    })


  }

}

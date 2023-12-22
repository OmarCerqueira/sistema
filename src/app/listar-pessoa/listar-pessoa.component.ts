import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: any;

  constructor(private servicePessoa: PessoaService) { }

  ngOnInit(): void {
    this.getTodosRegistros();
  }

  getTodosRegistros() {
    this.servicePessoa.getTodasPessoas().subscribe(resultado => {
      this.pessoas = resultado;

    });
  }

// adicionar()  {
  //   let contador = 0;

  //   contador = 'pessoas'.length+1;

  //   this.pessoas.push = {'nome'}


  // }


  // adicionar() {
  //   const novaLinha = {
  //     id: `Nova Linha ${this.pessoas.length + 1}`,
  //     nome: `Nova Linha ${this.pessoas.length + 1}`,
  //     endereco: `Nova Linha ${this.pessoas.length + 1}`,
  //     email: `Nova Linha ${this.pessoas.length + 1}`,
  //     cpf: `Nova Linha ${this.pessoas.length + 1}`
  //   };

  //   this.pessoas.push(novaLinha);
  // }

  titulo = 'Lista de Pessoas';


}

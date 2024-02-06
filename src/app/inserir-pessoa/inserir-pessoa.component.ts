import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent {

  constructor(private servicePessoa: PessoaService, private router: Router) {}

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
      this.router.navigate(['/']);
    });


  }

}

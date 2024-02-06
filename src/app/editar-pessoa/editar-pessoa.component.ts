import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  pessoaEmEdicao: any;
  idPessoa: number = 0;

  constructor(private servicePessoa: PessoaService, private rotaAtiva: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.idPessoa = this.rotaAtiva.snapshot.params['id'];
    this.buscarPessoaPorId(this.idPessoa);
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

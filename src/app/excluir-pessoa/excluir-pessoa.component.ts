import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pessoa',
  templateUrl: './excluir-pessoa.component.html',
  styleUrls: ['./excluir-pessoa.component.css']
})
export class ExcluirPessoaComponent {

  idPessoa: number = 0;
  pessoaSelecionada: any;

  constructor(private pessoaService: PessoaService, private rotaAtiva: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    this.getPessoaPorId();
  }

  getPessoaPorId() {
    this.idPessoa = this.rotaAtiva.snapshot.params['id'];
    this.pessoaService.getPessoaPorId(this.idPessoa).subscribe(resultado => {
      this.pessoaSelecionada = resultado;
    })
  }

  excluir(){
    this.idPessoa = this.rotaAtiva.snapshot.params['id'];
    this.pessoaService.excluirPessoaDoBancoDeDados(this.idPessoa).subscribe(resultado => {
      alert('Excluído com Sucesso!');
      this.router.navigate(['/']);
    });
  }

}

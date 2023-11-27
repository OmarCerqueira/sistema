import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Pessoas';

  pessoas = [
    {
      'nome' : 'Omar Cerqueira e Silva',
      'endereco' : 'R Sabino Silva',
      'email' : 'omar.cerqueira12@cerqueira.com',
      'cpf' : '465.456.152-15'
    },
    {
      'nome' : 'Lucas Santana',
      'endereco' : 'R Paripe',
      'email' : 'lucas.lu@cerqueira.com',
      'cpf' : '489.594.258-95'
    },
    {
      'nome' : 'Fernanda Oliveira',
      'endereco' : 'R Demdezeiro',
      'email' : 'fernanda-oli@cerqueira.com',
      'cpf' : '487.569.589-25'
    },
    {
      'nome' : 'Alex Pereira',
      'endereco' : 'R Mont Serrat',
      'email' : 'alex.al@cerqueira.com',
      'cpf' : '458.623.548-21'
    }
  ]
}

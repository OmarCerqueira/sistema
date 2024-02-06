import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlBancoDeDados = "http://localhost:3000/pessoas/";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  // GET - BUSCA TODOS OS IDS
  // GET/:ID - BUSCA ID POR PESSOA
  // PUT - ATUALIZA UM REGISTRO EXISTENTE
  // POST - INSERE UM NOVO REGISTRO
  // DELETE - APAGA UM REGISTRO EXISTENTE

  constructor(private http: HttpClient) { }

  getTodasPessoas() : Observable<any> {
    return this.http.get(`${urlBancoDeDados}`);
  }

  getPessoaPorId(id: number) : Observable<any> {
    return this.http.get(`${urlBancoDeDados}` + id);
  }

  salvarPessoaNoBancoDeDados(pessoa: any) : Observable<any> {
    return this.http.post(`${urlBancoDeDados}`, pessoa);
  }

  editarPessoaNoBancoDeDados(pessoa: any, idPessoa: number) : Observable<any> {
    return this.http.put(`${urlBancoDeDados + idPessoa}`, pessoa);
  }

  excluirPessoaDoBancoDeDados(id: number) : Observable<any> {
    return this.http.delete(`${urlBancoDeDados + id}`);
  }

}

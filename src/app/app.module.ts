import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconeEditarModule, IconeExcluirModule, IconeVisualizarModule, LayoutModule } from 'projects/layout/src/public-api';
import { BotaoAdicionarModule } from 'projects/layout/src/lib/botao-adicionar/botao-adicionar.module';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ExcluirPessoaComponent } from './excluir-pessoa/excluir-pessoa.component';
import { AppRoutingModule } from './app-routing.module';
import { BotaoCadastrarModule } from 'projects/layout/src/lib/botao-cadastrar/botao-cadastrar.module';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPessoaComponent,
    EditarPessoaComponent,
    ExcluirPessoaComponent,
    InserirPessoaComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BotaoAdicionarModule,
    BotaoCadastrarModule,
    IconeEditarModule,
    IconeVisualizarModule,
    IconeExcluirModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconeEditarModule, IconeExcluirModule, IconeVisualizarModule, LayoutModule } from 'projects/layout/src/public-api';
import { BotaoAdicionarModule } from 'projects/layout/src/lib/botao-adicionar/botao-adicionar.module';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ExcluirPessoaComponent } from './excluir-pessoa/excluir-pessoa.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListarPessoaComponent,
    EditarPessoaComponent,
    ExcluirPessoaComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BotaoAdicionarModule,
    IconeEditarModule,
    IconeVisualizarModule,
    IconeExcluirModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

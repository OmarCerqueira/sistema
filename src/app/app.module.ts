import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconeEditarModule, IconeExcluirModule, IconeVisualizarModule, LayoutModule } from 'projects/layout/src/public-api';
import { BotaoAdicionarModule } from 'projects/layout/src/lib/botao-adicionar/botao-adicionar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BotaoAdicionarModule,
    IconeEditarModule,
    IconeVisualizarModule,
    IconeExcluirModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

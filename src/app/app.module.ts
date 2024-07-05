import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { FormsModule, NgControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContasComponent } from './componentes/contas/contas.component';
import { PacienteComponent } from './models/paciente/listar/paciente.component';
import { MedicoComponent } from './models/medico/medico.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { ViewpacienteComponent } from './views/viewpaciente/viewpaciente/viewpaciente.component';
import { FormularioAdicionarComponent } from './models/paciente/adicionar/formulario-adicionar/formulario-adicionar.component';
import { EditarComponent } from './models/paciente/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PaginaInicialComponent,
    RodapeComponent,
    FormularioLoginComponent,
    ContasComponent,
    PacienteComponent,
    MedicoComponent,
    MensagemComponent,
    ViewpacienteComponent,
    FormularioAdicionarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

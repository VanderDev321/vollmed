import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContasComponent } from './componentes/contas/contas.component';
import { PacienteComponent } from './models/paciente/listar/paciente.component';
import { MedicoComponent } from './models/medico/listar/medico.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { ViewpacienteComponent } from './views/pacientes/viewpaciente.component';
import { FormularioAdicionarComponent } from './models/paciente/adicionar/formulario-adicionar/formulario-adicionar.component';
import { EditarComponent } from './models/paciente/editar/editar.component';
import { AdcionarComponent } from './models/medico/adcionar/adcionar.component';
import { MedicoEditarComponent } from './models/medico/editar/medico-editar/medico-editar.component';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PaginaInicialComponent,
    RodapeComponent,
    ContasComponent,
    PacienteComponent,
    MedicoComponent,
    FormularioLoginComponent,
    MensagemComponent,
    ViewpacienteComponent,
    FormularioAdicionarComponent,
    EditarComponent,
    AdcionarComponent,
    MedicoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

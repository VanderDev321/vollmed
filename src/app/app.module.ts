import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContasComponent } from './componentes/contas/contas.component';
import { PacienteComponent } from './views/paciente/paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PaginaInicialComponent,
    RodapeComponent,
    FormularioLoginComponent,
    ContasComponent,
    PacienteComponent
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

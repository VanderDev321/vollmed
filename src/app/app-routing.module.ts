import { FormularioAdicionarComponent } from './models/paciente/adicionar/formulario-adicionar/formulario-adicionar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { ContasComponent } from './componentes/contas/contas.component';
import { PacienteComponent } from './models/paciente/listar/paciente.component';
import { MedicoComponent } from './models/medico/medico.component';
import { ViewpacienteComponent } from './views/viewpaciente/viewpaciente/viewpaciente.component';
import { EditarComponent } from './models/paciente/editar/editar.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'paginaInicial',
    pathMatch:'full'
  },
  {
    path:'paginaInicial',
    component:PaginaInicialComponent
  },
  {
    path:'formularioLogin',
    component:FormularioLoginComponent
  },
  {
    path:"contas",
    component:ContasComponent
  },
  {
    path:"paciente",
    component:PacienteComponent
  },
  {
    path:"detalhePaciente/:id",
    component:ViewpacienteComponent
  },
  {
    path:"adicionarPaciente",
    component:FormularioAdicionarComponent
  },
  {
    path:"editarPaciente/:id",
    component:EditarComponent
  },
  {
    path:"medico",
    component:MedicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

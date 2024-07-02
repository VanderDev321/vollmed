import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { ContasComponent } from './componentes/contas/contas.component';
import { PacienteComponent } from './views/paciente/paciente.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

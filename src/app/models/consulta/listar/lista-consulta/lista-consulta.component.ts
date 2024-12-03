import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta, Medico, Paciente } from 'src/app/interfaces/token-interface';
import { ConsultaServiceService } from 'src/app/services/consultas/consulta-service.service';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.css']
})
export class ListaConsultaComponent implements OnInit {
buscaConsulta($event: FocusEvent) {
throw new Error('Method not implemented.');
}
listaConsulta:Consulta[] =[];
listaConsultasAtivas:Consulta[] = [];

  constructor( private service:ConsultaServiceService ,
    private router:Router
   ) { }

  ngOnInit(): void {
    this.service.listar().subscribe(consultas=>{
      this.listaConsulta = consultas;
      this.listarAtivas(consultas);

    })
  }

  listarAtivas(consultas:Consulta[]){
    this.listaConsultasAtivas = consultas.filter((consulta) => consulta.ativo == true);
    }
    adicionarNova(){
      this.router.navigateByUrl("adicionarConsulta");
    }


}

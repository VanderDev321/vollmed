import { Component, OnInit } from '@angular/core';
import { Consulta, Medico, Paciente } from 'src/app/interfaces/token-interface';
import { ConsultaServiceService } from 'src/app/services/consultas/consulta-service.service';
import { MedicoServiceService } from 'src/app/services/medicos/medico-service.service';
import { PacienteServiceService } from 'src/app/services/pacientes/paciente-service.service';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.css']
})
export class ListaConsultaComponent implements OnInit {
listaConsulta:Consulta[] =[];
medico!:Medico;
paciente!:Paciente;

  constructor( private service:ConsultaServiceService ,
    private medicoService:MedicoServiceService,
    private pacienteService:PacienteServiceService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(consultas=>{
      this.listaConsulta = consultas;
      this.buscaMedicoePaciente(consultas)
    })
  }



  private buscaMedicoePaciente(lista:Consulta[]):void{
    if(lista.length > 0){
      lista.forEach((resposta)=>{
        const idMedico = resposta.medico;
        const idPaciente = resposta.paciente;
        this.medicoService.buscarUm(idMedico).subscribe((item =>{
          this.medico = item;
        }));
         this.pacienteService.buscarPorId(idPaciente).subscribe((item =>{
          this.paciente = item;
         }));
      })
    }

  }

}

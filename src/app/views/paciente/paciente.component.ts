import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/token-interface';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  listaPacientes:Paciente[] =[];

  constructor(private service:PacienteServiceService) { }

  ngOnInit(): void {
    this.service.buscar().subscribe(pacientes =>{
      this.listaPacientes = pacientes;
    })
  }

  editar(){
    alert("editar");
  }
  excluir(){
    alert("excluir");
  }

}

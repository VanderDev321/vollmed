
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/interfaces/token-interface';
import { PacienteServiceService } from 'src/app/services/pacientes/paciente-service.service';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  listaPacientes:Paciente[] =[];


  constructor(private service:PacienteServiceService , private router:Router ) { }

  ngOnInit(): void {
    this.service.buscar().subscribe(pacientes =>{
      this.listaPacientes = pacientes;
    })

  }

    adicionarNovo() {
      this.router.navigate(["/adicionarPaciente"]);
      }


}

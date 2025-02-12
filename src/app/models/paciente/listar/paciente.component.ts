
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
  paginaAtual:number = 1 ;
  haMaisDados:boolean = true;


  constructor(private service:PacienteServiceService , private router:Router ) { }

  ngOnInit(): void {
    this.service.buscar(this.paginaAtual).subscribe(pacientes =>{
      this.listaPacientes = pacientes.data;
    })
  }
  carregarMais(){
    this.service.buscar(++this.paginaAtual).subscribe(pacientes =>{
      this.listaPacientes.push(...pacientes.data);
      if(pacientes.next == null){
        this.haMaisDados = false;
      }

    })
  }

    buscaPaciente(nome:any){
      const digitado = nome.target.value;
      if(digitado.length > 2){
<<<<<<< Updated upstream
      this.listaPacientes = this.listaPacientes.filter(paciente => paciente.nome.includes(String(digitado)));
      }
=======
        console.log(this.listaPacientes.filter(paciente => paciente.nome === digitado)) ;
      }


>>>>>>> Stashed changes
    }

    adicionarNovo() {
      this.router.navigate(["/adicionarPaciente"]);
      }



}

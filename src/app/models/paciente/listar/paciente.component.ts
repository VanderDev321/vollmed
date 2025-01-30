
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
      this.service.buscar(++this.paginaAtual).subscribe( pacientes =>{
        this.listaPacientes.push(...pacientes.data);
        if(pacientes.next ===null){
          this.haMaisDados = false;
        }

      })
    }

    buscaPaciente(nome:any){
      const digitado = nome.target.value;
      alert(`buscou por: ${digitado}`);
    }

    adicionarNovo() {
      this.router.navigate(["/adicionarPaciente"]);
      }



}

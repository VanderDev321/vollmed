import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscarPacientes(){
    this.router.navigate(['/paciente'])

  }
  buscarMedicos(){
    console.log("medicos");
  }
  buscarConsultas(){
    console.log("consultas");
  }

}

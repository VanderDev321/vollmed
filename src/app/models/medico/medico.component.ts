import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/interfaces/token-interface';
import { MedicoServiceService } from 'src/app/services/medico-service.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  listaMedicos: Medico[] = [];

  constructor(private medicoService: MedicoServiceService) { }

  ngOnInit(): void {
    this.medicoService.listar().subscribe(medicos =>{
      console.log(medicos)
      this.listaMedicos = medicos
    }
    )
  }

  editar(){
    alert("botao editar")
  }
  excluir(){
    alert("botao excluir")
  }

}

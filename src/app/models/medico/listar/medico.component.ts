import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/interfaces/token-interface';
import { MedicoServiceService } from 'src/app/services/medicos/medico-service.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  listaMedicos: Medico[] = [];

  constructor(private medicoService: MedicoServiceService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.medicoService.listar().subscribe(medicos =>{
      console.log(medicos)
      this.listaMedicos = medicos
    }
  )
}

editar(medico:Medico){
    this.route.navigateByUrl(`detalheMedico/${medico.id}`);
}
adcionarNovo() {
  this.route.navigateByUrl('/adicionarMedico');
}

}

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
  haMaisDados:boolean = true;
  paginaAtual:number = 1;

  constructor(private medicoService: MedicoServiceService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.medicoService.listar(this.paginaAtual).subscribe(medicos =>{
      this.listaMedicos = medicos.data;
    }
  )
}
filtrarMedico(dado:any){
  const pesquisado = dado.target.value;
  if(pesquisado.length > 2){
      this.listaMedicos = this.listaMedicos.filter(medico => medico.nome.includes(String(pesquisado)));
  }
}

editar(medico:Medico){
    this.route.navigateByUrl(`detalheMedico/${medico.id}`);
}
adicionarNovo() {
  this.route.navigateByUrl('/adicionarMedico');
}
carregarMaisDados() {
    this.medicoService.listar(++this.paginaAtual).subscribe( medicos =>{
      this.listaMedicos.push(...medicos.data);
      if (medicos.next == null) {
        this.haMaisDados = false;
      }
    })
  }

}

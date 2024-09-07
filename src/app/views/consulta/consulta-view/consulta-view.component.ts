import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Consulta, Medico, Paciente } from 'src/app/interfaces/token-interface';
import { ConsultaServiceService } from 'src/app/services/consultas/consulta-service.service';

@Component({
  selector: 'app-consulta-view',
  templateUrl: './consulta-view.component.html',
  styleUrls: ['./consulta-view.component.css']
})
export class ConsultaViewComponent implements OnInit {

  consulta!:Consulta;
  botaoClicado = true;
  acaoCard = 'close';
  acaoBotao ='cancelar';

  constructor(private router:Router,
  private serviceConsulta:ConsultaServiceService,
  private activeROute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activeROute.snapshot.paramMap.get("id");
    this.serviceConsulta.buscarUma(parseInt(id!)).subscribe((consulta) =>{
      this.consulta = consulta;
    })

  }

  listarTodas(){
    this.router.navigateByUrl("/consulta");
  }

  mostraCardCancelamento(estado:Boolean ):void{
    if(estado){
      this.acaoCard ="open";
      this.acaoBotao="voltar";
      this.botaoClicado = !this.botaoClicado;
    }else{
      this.acaoCard="close";
      this.acaoBotao="cancelar"
      this.botaoClicado = !this.botaoClicado;
    }
  }
  inserirMotivoDeCancelamento(f:NgForm){
    this.consulta.motivoCancelamento = f.value;
    this.serviceConsulta.editar(this.consulta);
  }


  cancelarConsulta(){
    this.serviceConsulta.cancelar(this.consulta);

  }
  editarConsulta(){
    this.router.navigateByUrl(`editarConsulta/${this.consulta.id}`);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta, Medico, Paciente } from 'src/app/interfaces/token-interface';
import { ConsultaServiceService } from 'src/app/services/consultas/consulta-service.service';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.css']
})
export class ListaConsultaComponent implements OnInit {

acao:boolean = false;
texto:string ="filtrar";
haMaisDados: boolean = true;
paginaAtual:number = 1;
listaConsulta:Consulta[] =[];
listaConsultasAtivas:Consulta[] = [];

  constructor( private service:ConsultaServiceService ,
    private router:Router
   ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe(consultas=>{
      this.listaConsulta = consultas.data;
      this.listarAtivas(this.listaConsulta);

    })
  }

  listarAtivas(consultas:Consulta[]){
    this.listaConsultasAtivas = consultas.filter((consulta) => consulta.ativo == true);
    }
    buscarMaisRegistro() {
      this.service.listar(++this.paginaAtual).subscribe( dados =>{
        this.listaConsulta.push(...dados.data)
        this.listarAtivas(this.listaConsulta);
        if(dados.next == null){
          this.haMaisDados = false;
        }
      })

      }
    adicionarNova(){
      this.router.navigateByUrl("adicionarConsulta");
    }
    acionarFiltro(){
      if(this.texto ==="filtrar"){
        this.acao = true;
        this.texto = "fechar"
      }else{
        this.acao = false;
        this.texto = "filtrar";
      }
    }

}

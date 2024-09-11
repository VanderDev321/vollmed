import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/interfaces/token-interface';
import { ConsultaServiceService } from 'src/app/services/consultas/consulta-service.service';

@Component({
  selector: 'app-adicionar-consulta',
  templateUrl: './adicionar-consulta.component.html',
  styleUrls: ['./adicionar-consulta.component.css']
})
export class AdicionarConsultaComponent implements OnInit {


  constructor(private service:ConsultaServiceService,
    private rota:Router
  ) { }

  ngOnInit(): void {
  }

   criarNova(form: NgForm) {
    if(form.valid){
      console.table(form.value);
      this.service.criar(form.value).subscribe(()=> this.rota.navigateByUrl("consulta"));
    }
    };

   listarTodas(){
    this.rota.navigateByUrl("consulta");
  }




}




import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/interfaces/token-interface';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  paciente!:Paciente;

  constructor(private router:Router , private service:PacienteServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.buscarPorId(parseInt(id!)).subscribe((paciente)=>{
       this.paciente = paciente;
    })
  }

  atualizar(form: NgForm) {
    if(form.valid){
      console.table("informações editadas:", form.value);
    }
 }
 retornarParaLista() {
    this.router.navigateByUrl("/paciente");
  }

  transformarEmFormulario(paciente:Paciente, form:NgForm){
    form.form.patchValue({
      nome:paciente.nome,
      telefone:paciente.telefone,
      email:paciente.email
    })
    return form;
  }



}

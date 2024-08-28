import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/interfaces/token-interface';
import { MedicoServiceService } from 'src/app/services/medicos/medico-service.service';

@Component({
  selector: 'app-medico-editar',
  templateUrl: './medico-editar.component.html',
  styleUrls: ['./medico-editar.component.css']
})
export class MedicoEditarComponent implements OnInit {

  constructor(private route:Router,
    private router :ActivatedRoute ,
    private service:MedicoServiceService,
    private formB:FormBuilder) { }

  formulario!: FormGroup;
  medico!: Medico;

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id");
    this.service.buscarUm(parseInt(id!)).subscribe((medicoBuscado)=>{
      this.medico = medicoBuscado;
      this.formulario = this.transformarEmFormulario(medicoBuscado)
    })

  }

  atualizar(formulario:FormGroup){
    if(formulario.valid){
      this.service.editar(formulario.value).subscribe(()=>this.route.navigateByUrl('/medico'));
    }
  }

  transformarEmFormulario(medico:Medico):FormGroup{
    this.formulario=this.formB.group({
      id:[medico.id],
      nome:[medico.nome,Validators.compose([Validators.required])],
      crm:[medico.crm,Validators.compose([Validators.required])],
      email:[medico.email, Validators.compose([Validators.required,Validators.email])],
      telefone:[medico.telefone,Validators.compose([Validators.required])],
      especialidade:[medico.especialidade, Validators.compose([Validators.required])],
      cep:[medico.cep, Validators.compose([Validators.required])],
      logradouro:[medico.logradouro, Validators.compose([Validators.required])],
      bairro:[medico.bairro,Validators.compose([Validators.required])],
      numero:[medico.numero,Validators.compose([Validators.required])],
      estado:[medico.estado,Validators.compose([Validators.required])],
      complemento:[medico.complemento]
    })

    return this.formulario;

}


  editar(formulario:FormGroup){
    this.atualizar(formulario);
  }

  cancelar(){
    alert("Solicitação cancelada");
    this.route.navigateByUrl("/medico");

  }
}

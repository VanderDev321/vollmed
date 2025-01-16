import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/interfaces/token-interface';
import { ViaCepService } from 'src/app/services/cep/via-cep.service';
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
    private formB:FormBuilder,
    private cep:ViaCepService) { }

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

buscarCep(cep:any){
  const numeroCep = cep.target.value;
  const cepFormatado = numeroCep.replace(".","").replace("-","");
  this.cep.getConsultaCep(cepFormatado).subscribe((dadosBuscados)=>{
    this.popularResultado(dadosBuscados,cepFormatado);
  })
}

popularResultado(resultado:any,cep:string){
  this.formulario = this.formB.group({
    id:[this.medico.id],
    nome:[this.medico.nome],
    crm:[this.medico.crm],
    email:[this.medico.email],
    telefone:[this.medico.telefone],
    especialidade:[this.medico.especialidade],
    cep:[cep],
    logradouro:[resultado.logradouro],
    bairro:[resultado.bairro],
    numero:[resultado.numero],
    estado:[resultado.uf],
    complemento:[resultado.complemento]
  })
  this.imprimeresultado(this.formulario.value);
  return this.formulario;
}


  editar(formulario:FormGroup){
    this.atualizar(formulario);
  }

  cancelar(){
    alert("Solicitação cancelada");
    this.route.navigateByUrl("/medico");

  }

  imprimeresultado(dado:any){
    console.log(dado);
  }
}

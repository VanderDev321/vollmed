import { PacienteServiceService } from './../../../services/pacientes/paciente-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/interfaces/token-interface';
import { ViaCepService } from 'src/app/services/cep/via-cep.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  paciente!:Paciente;
  formulario!:FormGroup;

  constructor(private router:Router ,
            private service:PacienteServiceService,
            private route:ActivatedRoute,
            private formB:FormBuilder,
            private cep:ViaCepService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.buscarPorId(parseInt(id!)).subscribe((paciente)=>{
      this.formulario = this.transformarEmFormulario(paciente);

    })
  }

  atualizar(formulario:FormGroup) {
    if(formulario.valid){
        this.service.atualizar(formulario.value).subscribe(()=>{
          alert("Paciente Editado");
          this.router.navigateByUrl('/paciente');
        })
    }
 }
 retornarParaLista() {
    this.router.navigateByUrl("/paciente");
  }

  transformarEmFormulario(paciente:Paciente):FormGroup{
      this.formulario=this.formB.group({
        id:[paciente.id],
        nome:[paciente.nome,Validators.compose([Validators.required])],
        cpf:[paciente.cpf,Validators.compose([Validators.required])],
        email:[paciente.email, Validators.compose([Validators.required,Validators.email])],
        telefone:[paciente.telefone,Validators.compose([Validators.required])],
        cep:[paciente.cep, Validators.compose([Validators.required])],
        logradouro:[paciente.logradouro, Validators.compose([Validators.required])],
        bairro:[paciente.bairro,Validators.compose([Validators.required])],
        numero:[paciente.numero,Validators.compose([Validators.required])],
        estado:[paciente.estado,Validators.compose([Validators.required])],
        complemento:[paciente.complemento]
      })

      return this.formulario;

  }
  ConsultaCep(cepEditado:any,form:FormGroup){
    const cep = cepEditado.target.value;
    if(cep != ''){
      this.cep.getConsultaCep(cep).subscribe((endereco)=>{
          this.preencheForm(endereco,form);
      });
    }
  }
  preencheForm(endereco: any, form: FormGroup<any>) {
    form.patchValue({
      logradouro:endereco.logradouro,
      bairro:endereco.bairro,
      numero:'',
      estado:endereco.uf,
      complemento:endereco.complemento

    })
    return form;
  }




}

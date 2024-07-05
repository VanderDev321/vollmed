import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';
import { ViaCepService } from 'src/app/services/via-cep.service';

@Component({
  selector: 'app-formulario-adicionar',
  templateUrl: './formulario-adicionar.component.html',
  styleUrls: ['./formulario-adicionar.component.css']
})
export class FormularioAdicionarComponent implements OnInit {

  aberto:boolean = false;

  constructor(private service:PacienteServiceService ,
    private cep:ViaCepService, private router:Router ) { }

    ngOnInit(): void {

    }

    novo(form:NgForm):void{
      if(form.valid){
        this.service.criar(form.value).subscribe(()=>{
          this.limparFormulario(form);
        })
      }else{
        alert("Formulario invalido")
      }
    }

    limparFormulario(form:NgForm):void{
      form.reset();
    }
    retornarParaLista(){
      this.router.navigateByUrl("/paciente");

    }
    pesquisarCep(cepDigitado: any,f: NgForm) {
        const cep = cepDigitado.target.value;
        if(cep!=''){
          this.cep.getConsultaCep(cep).subscribe((resultado)=>{
            this.popularResultado(resultado,f);
          })
        }
    }
    popularResultado(resultado:any,f:NgForm){
      f.form.patchValue({
        logradouro:resultado.logradouro,
        bairro:resultado.bairro,
        estado:resultado.uf,
        complemento:resultado.complemento
      })
      return f;
    }


}


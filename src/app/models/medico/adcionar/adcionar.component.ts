import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ViaCepService } from 'src/app/services/cep/via-cep.service';
import { MedicoServiceService } from 'src/app/services/medicos/medico-service.service';

@Component({
  selector: 'app-adcionar',
  templateUrl: './adcionar.component.html',
  styleUrls: ['./adcionar.component.css']
})
export class AdcionarComponent implements OnInit {
f!: NgForm;

  constructor(private route:Router,
    private service:MedicoServiceService,
    private cep:ViaCepService) { }

  ngOnInit(): void {
  }

  adicionar(form:NgForm){
    if(form.valid){
      this.service.criar(form.value).subscribe(()=>{
        this.route.navigateByUrl('/medico');
      }
      )

    }
  }

  buscarCep(cep:any, f: NgForm){
    const numeroCep = cep.target.value;
    const cepFormatado = numeroCep.replace(".","").replace("-","");
    this.cep.getConsultaCep(cepFormatado).subscribe((dadosBuscados)=>{
      this.popularResultado(dadosBuscados,f);
    })
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

  cancelar(){
    this.route.navigateByUrl('/medico');
  }

}

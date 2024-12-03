import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Consulta, DTOConsulta, Medico, Paciente } from 'src/app/interfaces/token-interface';
import { ConsultaServiceService } from 'src/app/services/consultas/consulta-service.service';
import { MedicoServiceService } from 'src/app/services/medicos/medico-service.service';
import { PacienteServiceService } from 'src/app/services/pacientes/paciente-service.service';

@Component({
  selector: 'app-adicionar-consulta',
  templateUrl: './adicionar-consulta.component.html',
  styleUrls: ['./adicionar-consulta.component.css']
})
export class AdicionarConsultaComponent implements OnInit {

  listaDeMedicos:Medico[]=[];
  DtoConsulta!:DTOConsulta;

  constructor(private service:ConsultaServiceService,
    private rota:Router,
    private pacienteService:PacienteServiceService,
    private medicoService:MedicoServiceService
  ) { }

  ngOnInit(): void {}

   criarNova(form: NgForm) {
    if(form.valid){
      this.DtoConsulta = form.value;
      form.reset();
      this.service.criar(this.transformaDtoEmConsulta(this.DtoConsulta)).subscribe(()=> this.rota.navigateByUrl("consulta"));
    }
    };

   listarTodas(){
    this.rota.navigateByUrl("consulta");
  }

  buscaUmPacientePeloCPF(numeroCpf:any , form:NgForm){
    let cpfCapturado = numeroCpf.target.value;
    if(cpfCapturado === ""){
        throw new Error();
    }
    let cpfFormatado = cpfCapturado.replace(".","").replace(".","").replace("-","");
    console.log(cpfFormatado);
    this.pacienteService.buscarPorCPF(cpfFormatado).subscribe((listapaciente) => {
      this.preencheNomePaciente(listapaciente,form);
    });
  }
  buscaUmMedicoPelaEspecialidade(especialidade:any , form:NgForm){
      let especialidadecapturada = especialidade.target.value;
      if(especialidadecapturada ===""){
        throw new Error();
      }
      this.medicoService.buscarPorEspecialidade(especialidadecapturada).subscribe((listaMedicos)=>{
        this.listaDeMedicos = listaMedicos;
      })

  }
  preencheNomePaciente(buscado:Paciente[] , form:NgForm){
    form.form.patchValue({
      paciente: buscado.map((paciente)=> paciente.nome),
    })
    return form;
  }

  transformaDtoEmConsulta(dto:DTOConsulta):Consulta{
    let consulta: Consulta = {
      ativo:true,
      motivoCancelamento:"",
      data: dto.data,
      hora: dto.hora,
      especialidade:dto.especialidade,
      medico:dto.medico,
      paciente:dto.paciente
    }
    return consulta;
  }


}




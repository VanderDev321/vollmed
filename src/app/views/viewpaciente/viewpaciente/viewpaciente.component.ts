import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/interfaces/token-interface';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';

@Component({
  selector: 'app-viewpaciente',
  templateUrl: './viewpaciente.component.html',
  styleUrls: ['./viewpaciente.component.css']
})
export class ViewpacienteComponent implements OnInit {

 paciente!:Paciente;

  constructor(private router:Router,private route:ActivatedRoute,private service:PacienteServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.buscarPorId(parseInt(id!)).subscribe( (pacienteBuscado =>{
      this.paciente = pacienteBuscado
    }
    ))
  }
  excluir(id: any) {
      this.service.excluir(id).subscribe( ()=>{
          this.retornarLista();
      })
    }

  retornarLista() {
    this.router.navigateByUrl("/paciente")
  }
}


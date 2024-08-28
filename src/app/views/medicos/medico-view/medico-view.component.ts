import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/interfaces/token-interface';
import { MedicoServiceService } from 'src/app/services/medicos/medico-service.service';

@Component({
  selector: 'app-medico-view',
  templateUrl: './medico-view.component.html',
  styleUrls: ['./medico-view.component.css']
})
export class MedicoViewComponent implements OnInit {

  medico!:Medico;

  constructor(private route:Router , private service:MedicoServiceService, private router:ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id");
    this.service.buscarUm(parseInt(id!)).subscribe((medico)=>{
      this.medico = medico;
    })

  }
  excluir(id: any) {
    this.service.excluir(id).subscribe(()=> this.route.navigateByUrl("/medico"));

  }
  retornarLista() {
    this.route.navigateByUrl("/medico");
  }

}

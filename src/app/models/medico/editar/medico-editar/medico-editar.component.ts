import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico-editar',
  templateUrl: './medico-editar.component.html',
  styleUrls: ['./medico-editar.component.css']
})
export class MedicoEditarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  editar(){
    alert("chamou o editar");
  }

  cancelar(){
    this.route.navigateByUrl("/medico");
    
  }
}

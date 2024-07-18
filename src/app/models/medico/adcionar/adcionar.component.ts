import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adcionar',
  templateUrl: './adcionar.component.html',
  styleUrls: ['./adcionar.component.css']
})
export class AdcionarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  cancelar(){
    this.route.navigateByUrl('/medico');
  }

}

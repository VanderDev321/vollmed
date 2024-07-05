import { HttpClientModule } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel,NgForm, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  constructor(private router: Router , private token: TokenServiceService) { }

  ngOnInit(): void {}


  chamarContas(form:NgForm) {
    this.router.navigate(['/contas']);
    }
}

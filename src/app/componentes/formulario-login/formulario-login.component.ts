import { HttpClientModule } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel,NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {


formulario!: FormGroup;

  constructor(private router: Router , private token: TokenServiceService, private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      login: ['', Validators.compose([Validators.required , Validators.minLength(5)])],
      senha: ['', Validators.compose([Validators.required])]
    })
  }

  chamarContas() {
    this.router.navigate(['/contas']);
    }
}

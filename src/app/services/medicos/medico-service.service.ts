import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Medico } from '../../interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})
export class MedicoServiceService {

  private readonly URL = "http://localhost:3000/medicos";

  constructor(private httpCliente: HttpClient
  ) { }

  listar():Observable<Medico[]>{
    return this.httpCliente.get<Medico[]>(this.URL);
  }
}

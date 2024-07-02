import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {

  private readonly url = "http://localhost:3000/pacientes";
  
  constructor(private httpCliente: HttpClient) { }

  buscar():Observable<Paciente[]>{
    return this.httpCliente.get<Paciente[]>(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/token-interface';
import { Form, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class PacienteServiceService {

  private readonly url = "http://localhost:3000/pacientes";

  constructor(private httpCliente: HttpClient) { }

  buscar():Observable<Paciente[]>{
    return this.httpCliente.get<Paciente[]>(this.url);
  }


  criar( paciente:Paciente):Observable<Paciente>{
    console.log("função no service")
    console.table(paciente);
    return this.httpCliente.post<Paciente>(this.url,paciente);

  }
  excluir(id:number){
    const urlDel=`${this.url}/${id}`;
    return this.httpCliente.delete(urlDel);
  }

  buscarPorId(id:number):Observable<Paciente>{
    const url = `${this.url}/${id}`;
    console.log(url)
    return this.httpCliente.get<Paciente>(url);
  }

}

import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  DTOPaginacao, Paciente } from '../../interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})

export class PacienteServiceService {

  private readonly url = "http://localhost:3000/pacientes";

  constructor(private httpCliente: HttpClient) { }

  buscar(pagina:number):Observable<DTOPaginacao>{
    const itensPorPagina:number = 7;
    let params = new HttpParams().set("_page",pagina).set("_per_page",itensPorPagina);
    return this.httpCliente.get<DTOPaginacao>(this.url,{params:params});
  }
  atualizar(paciente:Paciente):Observable<Paciente>{
    const urlEdit = `${this.url}/${paciente.id}`;
    return this.httpCliente.put<Paciente>(urlEdit,paciente);
  }

  criar( paciente:Paciente):Observable<Paciente>{
    return this.httpCliente.post<Paciente>(this.url,paciente);
  }
  excluir(id:number){
    const urlDel=`${this.url}/${id}`;
    return this.httpCliente.delete(urlDel);
  }

  buscarPorId(id:number):Observable<Paciente>{
    const url = `${this.url}/${id}`;
    return this.httpCliente.get<Paciente>(url);
  }
  buscarPorCPF(cpf:string):Observable<Paciente[]>{
    let param = new HttpParams().set("cpf",cpf);
    return this.httpCliente.get<Paciente[]>(this.url,{params:param});

  }

}

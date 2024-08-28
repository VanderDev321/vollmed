import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../../interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})
export class MedicoServiceService {

  private readonly URL = "http://localhost:3000/medicos";

  constructor(private httpCliente: HttpClient
  ) { }

  criar(medico: Medico):Observable<Medico> {
    return this.httpCliente.post<Medico>(this.URL , medico);
  }

  listar():Observable<Medico[]>{
    return this.httpCliente.get<Medico[]>(this.URL);
  }
  editar(medico:Medico):Observable<Medico>{
    const urlEdicao = `${this.URL}/${medico.id}`;
    return this.httpCliente.put<Medico>(urlEdicao,medico);

  }
  buscarUm(id:number):Observable<Medico>{
    const urlBusca =`${this.URL}/${id}`;
    return this.httpCliente.get<Medico>(urlBusca);

  }
  excluir(id:number){
    const urlDelecao = `${this.URL}/${id}`;
    return this.httpCliente.delete(urlDelecao);

  }
}

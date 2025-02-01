import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DTOPaginacao, Medico } from '../../interfaces/token-interface';

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

  listar(pagina:number):Observable<DTOPaginacao>{
    const numeroItensPagina:number = 5;
    let params = new HttpParams().set("_page",pagina).set("_per_page",numeroItensPagina);
    return this.httpCliente.get<DTOPaginacao>(this.URL,{params:params});
  }
  editar(medico:Medico):Observable<Medico>{
    const urlEdicao = `${this.URL}/${medico.id}`;
    return this.httpCliente.put<Medico>(urlEdicao,medico);

  }
  buscarUm(id:number):Observable<Medico>{
    const urlBusca =`${this.URL}/${id}`;
    return this.httpCliente.get<Medico>(urlBusca);

  }
  buscarPorEspecialidade(especialidadecapturada: any):Observable<Medico[]> {
      let param = new HttpParams().set('especialidade',especialidadecapturada);
      return this.httpCliente.get<Medico[]>(this.URL,{params:param});
  }
  excluir(id:number){
    const urlDelecao = `${this.URL}/${id}`;
    return this.httpCliente.delete(urlDelecao);

  }
}

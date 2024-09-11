import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Consulta } from 'src/app/interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaServiceService {

  private readonly URL = "http://localhost:3000/consultas";

  constructor(private http:HttpClient,
    private router:Router
  ) { }


  listar():Observable<Consulta[]>{

    return this.http.get<Consulta[]>(this.URL);
  }
  criar(consulta:Consulta){
    return this.http.post<Consulta>(this.URL,consulta);
  }

  editar(consulta:Consulta){
    const id = consulta.id;
    const urlEditar = `${this.URL}/${id}`;
    return this.http.put<Consulta>(urlEditar,consulta);
  }

  buscarUma(id:number){
    const urlBuscar =`${this.URL}/${id}`;
    return this.http.get<Consulta>(urlBuscar);
  }

  cancelar(consulta:Consulta){
    consulta.ativo = false;
    this.editar(consulta).subscribe(()=>{
      alert("CONSULTA CANCELADA");
      this.router.navigateByUrl("/consulta")
    } );
  }

}

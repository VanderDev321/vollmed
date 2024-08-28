import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from 'src/app/interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaServiceService {

  readonly URL = "http://localhost:3000/consultas";

  constructor(private http:HttpClient) { }


  listar():Observable<Consulta[]>{

    return this.http.get<Consulta[]>(this.URL);

  }
}

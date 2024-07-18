import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  private readonly url ='https://viacep.com.br/ws/';

  constructor(private http:HttpClient) { }

  getConsultaCep( cep: string){
    const enderecoCep = `${this.url}${cep}/json/`;
     return this.http.get(enderecoCep);
  }
}

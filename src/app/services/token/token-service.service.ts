import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Login } from '../../interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  private readonly UPI = "http://localhost:8080/login";

  constructor(private httpCliente: HttpClient) { }


  buscarToken(login:Login):Observable<HttpResponse<any>>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers':
          'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpCliente.post<HttpResponse<any>>(this.UPI,login);

  }

}

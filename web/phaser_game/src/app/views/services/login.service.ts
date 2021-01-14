import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../entidades/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  loginUrlAPI = 'home';
  headers = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
  }


  constructor(private http: HttpClient) { }

  iniciarSesion(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.loginUrlAPI, usuario, this.headers);
  }
}

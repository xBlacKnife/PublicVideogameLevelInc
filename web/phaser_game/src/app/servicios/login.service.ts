import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  materialAdmUrlAPI = '/login';
  headers = {
    headers: new HttpHeaders()
      //.set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      .set('Content-Type', 'application/json')
  }

  constructor(private http: HttpClient) {     
  }


}


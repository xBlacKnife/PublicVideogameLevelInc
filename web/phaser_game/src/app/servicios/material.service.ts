import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Material } from '../entidades/Material';
import { ResultadoVisita } from '../entidades/resultadoVisita';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materialAdmUrlAPI = 'API/materiales';
  headers = {
    headers: new HttpHeaders()
      //.set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      .set('Content-Type', 'application/json')
  }

  constructor(private http: HttpClient) {     
  }

  crearMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(this.materialAdmUrlAPI, material, this.headers);
}

  getMaterial(idMaterial: string): Observable<Material> {
    return this.http.get<Material>(this.materialAdmUrlAPI + '/' + idMaterial, this.headers);
  }

  getAllMaterial(): Observable<Material[]> {
  return this.http.get<Material[]>(this.materialAdmUrlAPI, this.headers);
  }

  modificarMaterial(material: Material): Observable<string> {
    return this.http.put<string>(this.materialAdmUrlAPI, material, this.headers);
  }

  eliminarMaterial(idMaterial: string): Observable<string> {
  return this.http.delete<string>(this.materialAdmUrlAPI + '/' + idMaterial, this.headers);
  }

  obtenerResultado(codigo: string): Observable<ResultadoVisita>{
          return this.http.get<ResultadoVisita>(this.materialAdmUrlAPI + '/porCodigo/' + codigo, this.headers);
  }


}


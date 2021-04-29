import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Course } from '../model/course';
import { Matricula } from '../model/Matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  constructor(private http: HttpClient) { }

  idUser: number= environment.id;

  baseUrl: string= 'http://localhost:8080/usuario/';

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  matricularAluno(idCourse: number): Observable<Matricula>{
    return this.http.post<Matricula>(this.baseUrl.concat(`${this.idUser}/matricular/curso/${idCourse}`), this.token)
  }

  listaMatricula(): Observable<Matricula[]>{
    return this.http.get<Matricula[]>(this.baseUrl.concat(`${this.idUser}/matricular/listar`), this.token)
  }

  finalizarCurso(idCourse){
    return this.http.post(this.baseUrl.concat(`${this.idUser}/matricular/concluir/${idCourse}`), this.token)
  }
}

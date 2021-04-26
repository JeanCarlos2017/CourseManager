import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  idUser: number= environment.id;

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  findAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`http://localhost:8080/usuario/${this.idUser}/cursos`, this.token)
  }

  filterByNome(nome: string): Observable<Course[]>{
    return this.http.get<Course[]>(`http://localhost:8080/usuario/${this.idUser}/cursos/pesquisa-curso-por/${nome}`, this.token)
  }
}

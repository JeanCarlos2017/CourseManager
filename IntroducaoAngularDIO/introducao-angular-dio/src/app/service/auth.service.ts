import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
     return this.http.post<UserLogin>('http://localhost:8080/usuario/login', userLogin);
   }
 
   cadastrar(user: User): Observable<User>{
     return this.http.post<User>('http://localhost:8080/usuario/cadastrar', user);
   }
 
   getByIdUser(id: number, token: Object): Observable<User>{
     return this.http.get<User>(`http://localhost:8080/usuario/buscaPorId/${id}`, token);
   }
 
   logado(){
     let ok: boolean = false;
 
     if(environment.token != ''){
       ok= true;
     }
     return ok;
   }
 
   atualizar(user: User): Observable<User>{
     return this.http.put<User>('http://localhost:8080/usuario/atualizar', user);
   }
}

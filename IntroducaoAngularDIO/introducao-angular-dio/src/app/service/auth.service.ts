import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  baseUrl: string= 'http://localhost:8080/usuario/';

  entrar(userLogin: UserLogin): Observable<UserLogin>{
     return this.http.post<UserLogin>(this.baseUrl.concat('login'), userLogin);
   }
 
   cadastrar(user: User): Observable<User>{
     return this.http.post<User>(this.baseUrl.concat('cadastrar'), user);
   }
 
   getByIdUser(id: number, token: Object): Observable<User>{
     return this.http.get<User>(this.baseUrl.concat(`buscaPorId/${id}`), token);
   }
 
   logado(){
     let ok: boolean = false;
 
     if(environment.token != ''){
       ok= true;
     }
     return ok;
   }
 
   atualizar(user: User): Observable<User>{
     return this.http.put<User>(this.baseUrl.concat('atualizar'), user);
   }
}

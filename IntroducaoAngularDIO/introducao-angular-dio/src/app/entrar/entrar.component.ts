import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin= new UserLogin();
  constructor(private authService: AuthService, private router: Router, private title: Title,
          private alertService: AlertasService) { }

  ngOnInit(): void {
    this.title.setTitle("Entre no Blog");
  }
  
  login(){
    this.authService.entrar(this.userLogin).subscribe( (resp: UserLogin) =>{
        this.userLogin= resp;

        //pegando as variáveis e deixando-as global 
        environment.id= this.userLogin.id;
        environment.nome= this.userLogin.nome;
        environment.token= this.userLogin.token;
      
        
        //informo o usuário e o redireciono
        this.router.navigate(['/courses']);
        //alert('usuario logado com sucesso!');
        this.alertService.showAlert('usuario logado com sucesso!', 'success')

    }, erro =>{
      if(erro.status == 404){
        //alert(erro.error.titulo)
        this.alertService.showAlert(erro.error.titulo, 'danger')
        
      }
    });
  }

}

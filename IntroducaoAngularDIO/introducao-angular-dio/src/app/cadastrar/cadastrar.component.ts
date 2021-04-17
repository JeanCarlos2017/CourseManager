import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  user: User= new User
  confirmarSenha: string;

  constructor(private authService: AuthService, private router: Router, private title: Title,
    private alertService: AlertasService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.title.setTitle("Cadastre-se no Couse Manager");
  }

  confirmPassword(event: any){
      this.confirmarSenha= event.target.value;  
  }

 cadastrar(){
      
      if(this.user.senha == this.confirmarSenha){
        this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user= resp;
          this.router.navigate(['/entrar']);
          this.alertService.showAlert('usuario cadastrado  com sucesso!', 'success') 
         }, erro =>{
          if(erro.status >= 400){
            erro.error.campos.forEach( (campo)=>{
              this.alertService.showAlert('mensagem: '+campo.mensagem, 'danger')
            })
            
          }
        });

      }else{
        this.alertService.showAlert('senhas não correspondem!', 'danger')
      }
  }

}

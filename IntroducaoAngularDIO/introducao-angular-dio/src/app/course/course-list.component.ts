import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Course } from '../model/course';
import { Matricula } from '../model/Matricula';
import { AlertasService } from '../service/alertas.service';
import { CourseService } from '../service/course.service';
import { MatriculaService } from '../service/matricula.service';

//imports para colocar o R$

@Component({
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    filteredCourses: Course[] = [];

    _courses: Course[];
    filter: string;
    constructor(private courseService: CourseService, private alertService: AlertasService,
        private title: Title, private router: Router, private matriculaService: MatriculaService) { }



    ngOnInit(): void {
        window.scroll(0, 0);
        this.title.setTitle("Todos os cursos da plataforma Course Manager");
        this.isLogado();
        this.findAllCourse();
        this.listarMatricula();
    }

    isLogado() {
        if (environment.token === '') {
            this.alertService.showAlert("Sua seção foi encerrada, faça o login novamente", "info")
            this.router.navigate(['/entrar']);
        }
    }

    findAllCourse() {
        this.courseService.findAllCourses().subscribe((resp: Course[]) => {
            this._courses = resp;
            this.filteredCourses = this._courses;
        })
    }

    findByNome() {
        if (this.filter === '') {
            this.filteredCourses = this._courses;
        }
        else {
            this.courseService.filterByNome(this.filter).subscribe((resp: Course[]) => {
                this.filteredCourses = resp;
            })
        }
    }

   listarMatricula(){
        this.matriculaService.listaMatricula().subscribe( (resp: Matricula[])=>{
            console.log(resp)
        }, erro =>{
            if(erro.status >= 400){
              erro.error.campos.forEach( (campo)=>{
                this.alertService.showAlert('mensagem: '+campo.mensagem, 'danger')
              })
              
            }
          });
    }

    matricular(idCourse: number){
        this.matriculaService.matricularAluno(idCourse).subscribe( (resp: Matricula)=>{
            console.log(resp)
        }, erro =>{
            if(erro.status === 400){
              erro.error.campos.forEach( (campo)=>{
                this.alertService.showAlert('mensagem: '+campo.mensagem, 'danger')
              })
              
            }
          });
    }

}
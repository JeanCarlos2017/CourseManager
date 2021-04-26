import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Course } from '../model/course';
import { AlertasService } from '../service/alertas.service';
import { CourseService } from './course.service';
//imports para colocar o R$

@Component({
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
    filteredCourses: Course[]= [];

    _courses: Course[] = [];
    constructor(private courseService: CourseService, private alertService: AlertasService, 
        private title: Title, private router: Router){}

    _filterBy: string;
    ngOnInit(): void {
       window.scroll(0,0);
       this.title.setTitle("Todos os cursos da plataforma Course Manager");
       this.isLogado();       
       this._courses= this.courseService.retrieveAll();
       this.filteredCourses= this._courses;
      
    }

    set filter(value: string){
        this._filterBy= value;
        this.filteredCourses=  this._courses.filter( (course: Course) => 
                course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

    isLogado(){
        if(environment.token === ''){
            this.alertService.showAlert("Sua seção foi encerrada, faça o login novamente", "info")
            this.router.navigate(['/entrar']);
        }
    }
}
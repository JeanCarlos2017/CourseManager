import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Course } from '../model/course';
import { AlertasService } from '../service/alertas.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course-closed',
  templateUrl: './course-closed.component.html',
  styleUrls: ['./course-closed.component.css']
})
export class CourseClosedComponent implements OnInit {
  filteredCourses: Course[] = [];
  _courses: Course[];
  filter: string;
  constructor(private courseService: CourseService, private alertService: AlertasService,
    private title: Title, private router: Router) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.title.setTitle("Todos os cursos que voce está cadastrado");
    this.isLogado();
    this.getCourseClosedUser();
  }

  isLogado() {
    if (environment.token === '') {
      this.alertService.showAlert("Sua seção foi encerrada, faça o login novamente", "info")
      this.router.navigate(['/entrar']);
    }
  }

  getCourseClosedUser() {
    this.courseService.getCourseClosedUser().subscribe((resp: Course[]) => {
      this._courses = resp;
      this.filteredCourses = this._courses;
    })
  }

  findByNome() {
    if (this.filter === '') {
      this.filterVazio();
    } else {
      this.buscaCursoDeAcordoComFilter(this.filter, this.filteredCourses);
    }
  }

  filterVazio() {
    this.filteredCourses = this._courses;
  }


  buscaCursoDeAcordoComFilter(filter: string, filteredCourses: Course[]) {
   this.resetaFilteredCourses();
   this.addCourseAtFilteredCourse();
  }

  resetaFilteredCourses(){
    this.filteredCourses = [];
  }

  addCourseAtFilteredCourse(){
    for(let i= 0; i < this._courses.length; i++){
      if(this.comparaNome(this._courses[i])){
        this.filteredCourses.push(this._courses[i])
      }
    }
  }

  comparaNome(course: Course){
    if (course.nome.toLocaleLowerCase().indexOf(this.filter.toLowerCase()) > -1) return true;
    else  return false
    
  }

  remover(idCourse: number){
    this.alertService.showAlert("Função ainda não implementada", 'info');
  }

}

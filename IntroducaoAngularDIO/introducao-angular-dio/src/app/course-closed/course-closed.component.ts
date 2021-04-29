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
      this.filteredCourses = this._courses;
    }
    else {
      this.courseService.filterByNome(this.filter).subscribe((resp: Course[]) => {
        this.filteredCourses = resp;
      })
    }
  }

  remover(idCourse: number){
    this.alertService.showAlert("Função ainda não implementada", 'info');
  }

}

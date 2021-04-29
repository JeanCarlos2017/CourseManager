import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Course } from '../model/course';
import { Matricula } from '../model/Matricula';
import { AlertasService } from '../service/alertas.service';
import { CourseService } from '../service/course.service';
import { MatriculaService } from '../service/matricula.service';

@Component({
  selector: 'app-course-opened',
  templateUrl: './course-opened.component.html',
  styleUrls: ['./course-opened.component.css']
})
export class CourseOpenedComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[];
  filter: string;
  constructor(private courseService: CourseService, private alertService: AlertasService,
    private title: Title, private router: Router, private matriculaService: MatriculaService) { }



  ngOnInit(): void {
    window.scroll(0, 0);
    this.title.setTitle("Todos os cursos da plataforma Course Manager");
    this.isLogado();
    this.getCourseOpenedUser();
  }

  isLogado() {
    if (environment.token === '') {
      this.alertService.showAlert("Sua seção foi encerrada, faça o login novamente", "info")
      this.router.navigate(['/entrar']);
    }
  }

  getCourseOpenedUser() {
    this.courseService.getCourseOpenedUser().subscribe((resp: Course[]) => {
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

  finalizar(idCourse: number) {
    this.matriculaService.finalizarCurso(idCourse).subscribe( () => {
      this.alertService.showAlert("Curso finalizado com sucesso", "success")
      this.getCourseOpenedUser();
      
    }, erro => {
      if (erro.status === 400) {
        erro.error.campos.forEach((campo) => {
          this.alertService.showAlert('mensagem: ' + campo.mensagem, 'danger')
        })

      }
    });
  }

}

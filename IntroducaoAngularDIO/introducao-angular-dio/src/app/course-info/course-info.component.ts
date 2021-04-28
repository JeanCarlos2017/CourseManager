import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { Title } from '@angular/platform-browser';
import { AlertasService } from '../service/alertas.service';
import { CourseService } from '../service/course.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  courseId: number;
  course: Course= new Course();
  
  constructor(private courseService: CourseService, 
    private router: Router,
    private title: Title, 
    private alertService: AlertasService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLogado();
    this.title.setTitle("Altere um curso no CourseManager");
    window.scrollTo(0,0);
    this.courseId= +this.activeRoute.snapshot.paramMap.get('id'); 
    this.findCourseById();
  }

  save(){
    this.courseService.putCourse(this.course).subscribe( (resp: Course )=>{
      this.alertService.showAlert("Curso alterado com sucesso", "success")
      this.router.navigate(['/courses']);
    }, erro =>{
      if(erro.status >= 400){
        erro.error.campos.forEach( (campo)=>{
          this.alertService.showAlert('mensagem: '+campo.mensagem, 'danger')
        })
        
      }
    });
  }

  findCourseById(){
    this.courseService.findCourseById(this.courseId).subscribe( (res: Course) =>{
      this.course= res;
    }, erro =>{
      if(erro.status >= 400){
        erro.error.campos.forEach( (campo)=>{
          this.alertService.showAlert('mensagem: '+campo.mensagem, 'danger')
        })
        
      }
    });
  }

  isLogado() {
    if (environment.token === '') {
        this.alertService.showAlert("Sua seção foi encerrada, faça o login novamente", "info")
        this.router.navigate(['/entrar']);
    }
  }
}

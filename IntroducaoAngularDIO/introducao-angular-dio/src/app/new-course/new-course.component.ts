import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { AlertasService } from '../service/alertas.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  course: Course= new Course();
  constructor(private courseService: CourseService, 
    private router: Router,
    private title: Title, 
    private alertService: AlertasService) { }
  
  ngOnInit(): void {
    this.title.setTitle("Cadastrar novo curso em CourseManager");
    window.scrollTo(0,0);

  }

  save(){
    this.courseService.saveCourse(this.course).subscribe( (resp: Course) =>{
      console.log(resp)
      this.alertService.showAlert("Curso cadastrado com sucesso", "success")
      this.router.navigate(['/courses']);
    }, erro =>{
      if(erro.status >= 400){
        erro.error.campos.forEach( (campo)=>{
          this.alertService.showAlert('mensagem: '+campo.mensagem, 'danger')
        })
        
      }
    });
    
  }
}

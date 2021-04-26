import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  courseId: number;
  course: Course;
  
  constructor(private activeRoute: ActivatedRoute, 
    private courseService: CourseService, 
    private router: Router) { }

  ngOnInit(): void {
    this.courseId= +this.activeRoute.snapshot.paramMap.get('id'); //o sinal '+' faz a conversão de string para number
    this.course= this.courseService.retriveById(this.courseId);
  }

  save(){
    this.courseService.save(this.course);
    alert("Curso alterado com sucesso");
    this.router.navigate(['/courses']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
//imports para colocar o R$

@Component({
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
    filteredCourses: Course[]= [];

    _courses: Course[] = [];
    constructor(private courseService: CourseService){}

    _filterBy: string;
    ngOnInit(): void {
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
}
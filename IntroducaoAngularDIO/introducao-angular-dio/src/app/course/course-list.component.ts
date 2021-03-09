import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list', 
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
   
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses= [
            {
                id: 1,
                name: "Introdução ao Angular",
                imageUrl: "/assets/images/icone_angular.png",
                price: 24.99,
                code: "code introdução ao angular",
                duration: 5,
                rating: 4.5,
                releaseData: "Janeiro/2020"
            },

            {
                id: 2,
                name: "Introdução ao Java",
                imageUrl: "/assets/images/icone_java.png",
                price: 14.99,
                code: "code introdução ao java",
                duration: 12,
                rating: 3.5,
                releaseData: "fevereiro/2021"
            },

            {
                id: 3,
                name: "Introdução ao Cobol",
                imageUrl: "/assets/images/icone_cobol.png",
                price: 444.99,
                code: "code introdução ao Cobol",
                duration: 50,
                rating: 5,
                releaseData: "junho/2014"
            }
        ]
    }
}
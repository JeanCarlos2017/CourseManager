import { Injectable } from "@angular/core";
import { Course } from "./course";

//torna elegível para injeção de dependencia 
@Injectable({
    providedIn: 'root'
})
export class CourseService{
    retrieveAll(): Course[]{
        return COURSES;
    }
}
var COURSES: Course[] = [
    {
        id: 1,
        name: 'Python básico',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter o conhecimento básico para se aventurar nessa poderosa linguagem que é o Python',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/icone_python.png',
    },
    {
        id: 2,
        name: 'Angular',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no Angular',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/icone_angular.png',
    },
    {
        id: 3,
        name: 'Java',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis na linguagem Java.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/icone_java.png',
    },
    {
        id: 4,
        name: 'Cobol',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis na linguagem Cobol.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/icone_cobol.png',
    },
    {
        id: 5,
        name: 'JavaScript',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no JavaScript.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/icone_js.png',
    }
];
import { ChaveMatricula } from "./ChaveMatricula";
import { Course } from "./course";
import { User } from "./User";

export class Matricula{
   public id: ChaveMatricula;
   public  aluno: User;
   public curso: Course
   public finalizado: boolean;
}
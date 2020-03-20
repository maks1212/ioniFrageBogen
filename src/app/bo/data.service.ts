import { Injectable } from '@angular/core';
import {Question, Quiz} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentQuiz: Quiz = {
    id: '',
    quizName: 'Maks Quiz',
    questions: []
  } ;

  constructor() {
    this.currentQuiz.questions.push({
      id: '1',
      title: 'was is 2 x 2',
      answerOne: '1',
      answerTwo: '2',
      answerThree: '3',
      answerFour: '4',
      correct: 4
    });

    this.currentQuiz.questions.push({
      id: '2',
      title: 'was is 2 x 3',
      answerOne: '1',
      answerTwo: '2',
      answerThree: '6',
      answerFour: '4',
      correct: 3
    })
  }
}

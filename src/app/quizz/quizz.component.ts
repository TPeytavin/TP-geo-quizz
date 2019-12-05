import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  i: number = 0;


  questions: Question[] = [
    {
      id: 1,  question: "Quelle est la capital du Turkménistan", answers: ["Achgabat", "Bangkok", "Taipei", "Damas"], answer: "Achgabat"
    },
    {
      id: 2, question: "Quelle est la capital de l'Allemagne", anslistobj: ["Rome", "Londre", "Berlin", "Paris"], answer: "Berlin"
    },
    {
      id: 3,  question: "Quelle est la capital de l'Angola", anslistobj: ["Pretoria", "Alger", "Harare", "Luanda"], answer: "Luanda"
    },
    {
      id: 4,  question: "Quelle est la capital du Venezuela", anslistobj: ["Montevideo", "Washington", "Quito", "Caracas"], answer: "Caracas"
    }
  ];
    /******************************************************* */


  iQuestion = 0;
  start=false;
  gameover=false;
  currentQuestion: number;
  answer: string
  found: boolean
  hasNext = true

  constructor(questions : Question[], iQuestion : number, currentQuestion: number, answer: string, found : boolean, hasNext : boolean ) { 
    this.questions = questions,
    this.iQuestion = iQuestion,
    this.currentQuestion = currentQuestion,
    this.answer = answer,
    this.found = found,
    hasNext = hasNext
    this.currentQuestion=0;
  }
      /******************************************************* */
  ngOnInit() {
  }



  
  

    /******************************************************* */

     loadNextQuestion() {   
      ++this.i;
      this.questions = this.Questions[this.i].question;
      this.answer = this.Questions[this.i].answer;
    }

    /******************************************************* */
    score = 0;
    generatemark() {
      for (var i = 0; i < this.Questions.length; i++) {
        if (this.Questions[i].choosen == this.Questions[i].answer) this.score++;
      }
      // alert("your score is "+JSON.stringify(this.marks));
      document.writeln("your score is " + this.score);
    }


    startQuiz(){
      this.gameover=false;
      this.currentQuestion=0;
     this.Question= this.questions[this.currentQuestion];
        this.start=true;
    }
}

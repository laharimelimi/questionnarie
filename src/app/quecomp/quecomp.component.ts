import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

type QuestionKey = 'q1' | 'q2' | 'q3' | 'q4' | 'q5';


@Component({
  selector: 'app-quecomp',
  standalone: false,
  templateUrl: './quecomp.component.html',
  styleUrls: ['./quecomp.component.css']
})

export class QuecompComponent {

  answer: { [key: string]: string } = {
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  q5: ''
};

  currentQuestion:number=1;
  finalAnswer:string='';
  
  // Store styles per question key
  noStyle:  { [key : number]: any } = {};

  
  
  noanswer(questionKey: string, value: string) {
  this.answer[questionKey] = value;

  // If it's the last question, store final answer
  if (questionKey === 'q5') {
    this.finalAnswer = value;
    this.currentQuestion = 6; // this is important!
  } else {
    this.currentQuestion++;
  }
}

  
    // ✅ Called when mouse enters the NO button
    moveNoButton(event: MouseEvent, qNumber: any){
      const button = event.target as HTMLElement;
      const container = button.parentElement?.parentElement as HTMLElement;

      if (!button || !container) return;

      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const maxX = containerRect.width - buttonRect.width;
      const maxY = containerRect.height - buttonRect.height;

      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY; 

     
      button.style.position = 'absolute';
  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
    };
  }
 




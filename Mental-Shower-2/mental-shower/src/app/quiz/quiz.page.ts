import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }
  answers1=[
    'Great',
    'Not Good'
    ]
    responses1=[
      
      ]
      answers2=[
        'Temperature',
        'Smell', 
        'Headache',
        'Wet',
        'Dry'
        ]
        responses2=[
          
          ]
          answers3=[
            'Feeling hot',
            'Feeling cold',
            'Feeling okay'
            ]
            responses3=[

            ]




 

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

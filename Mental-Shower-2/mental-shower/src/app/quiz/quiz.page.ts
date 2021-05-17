import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FirestoreCrudService} from 'src/app/services/firestore-crud.service';






@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})

export class QuizPage implements OnInit {

  constructor(firestore:FirestoreCrudService) { 

    
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
        'Feeling hot',
            'Feeling cold',
        'It smells bad', 
        'I have a headache',
        'I feel like it is wet',
        'I feel like it is dry'
        ]
        responses2=[
          
          ]
          answers3=[
            
            
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



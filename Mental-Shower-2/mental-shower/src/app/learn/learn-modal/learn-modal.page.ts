import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-learn-modal',
  templateUrl: './learn-modal.page.html',
  styleUrls: ['./learn-modal.page.scss'],
})
export class LearnModalPage implements OnInit {
  
 /////////////////////////////////////////////////////////
  responses = [

  ];

  answers = [
  "I am tired",
  "I am anxious",
  "I am sleepy",
  "I feel dehydrated"
   
  ];

  correctAnswers = [
  "I am tired",
  "I am anxious",
  "I am sleepy"
  ];
/////////////////////////////////////////////////////
    responses1 = [

    ];
  
    answers1 = [
    "I lose focus easily",
    "I am exhausted",
    "My pulse is weak",
    "My heart rate is increasing"
     
    ];
  
    correctAnswers1 = [
      "I lose focus easily",
      "My pulse is weak",
      "My heart rate is increasing"
      ];

//////////////////////////////////////////////////////////

      responses2 = [

      ];
    
      answers2 = [
      "My body's perception of heat is changing",
      "My lips are dry",
      "I am thirsty",
      "I m tired"
       
      ];
    
      correctAnswers2 = [
       "My body's perception of heat is changing",
       "My lips are dry",
       "I am thirsty",
      ];
  /////////////////////////////////////////////////
  responses3 = [

  ];

  answers3 = [
  "I am uncomfortable",
  "I have a headache",
  "I am thirsty",
  "I am freezing"
   
  ];

  correctAnswers3 = [
  "I am uncomfortable",
  "I have a headache",
  "I am freezing"
  ];

/////////////////////////////////////////

  constructor(private modalController:ModalController) { }

  ngOnInit() {

  }
  closeModal(){
    console.log("hello");
this.modalController.dismiss();
  }

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

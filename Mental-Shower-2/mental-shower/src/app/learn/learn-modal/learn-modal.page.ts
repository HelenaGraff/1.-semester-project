import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide, IonSlides, ModalController } from '@ionic/angular';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {FirestoreCrudService} from 'src/app/services/firestore-crud.service';

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
success1:boolean;
success2:boolean;
success3:boolean;
success4:boolean;










@ViewChild("slides")slides:IonSlides;
  constructor(private modalController:ModalController, private firestoreService:FirestoreCrudService) { 
    

    
  }

  slideChange(){
    console.log("slides moved");
   
  this.slides.getActiveIndex().then((x)=>{

  })
  }

  ngOnInit() {
    
   
  }

  ionViewWillEnter(){
    this.slides.lockSwipes(true);
  }
  closeModal(){
    console.log("hello");
this.modalController.dismiss();
  }

  successEventHappening(){
    console.log("SUCCESS EVENT");
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    
    this.firestoreService.create("testing",{testVar:"blablabal"});

  }

 

}

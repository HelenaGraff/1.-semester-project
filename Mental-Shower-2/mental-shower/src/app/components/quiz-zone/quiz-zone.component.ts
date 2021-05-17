import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { QuizServiceService } from 'src/app/services/quiz-service.service';


@Component({
  selector: 'quiz-zone',
  templateUrl: './quiz-zone.component.html',
  styleUrls: ['./quiz-zone.component.scss'],
})
export class QuizZoneComponent implements OnInit {
  
  @Input("question") question:string;
  @Input("answers") answers:string[];
  @Input("responses") responses:string[];
  

dragDisabled:boolean;
  
  constructor(public quizService:QuizServiceService) { }

  ngOnInit() {}
  
  drop(event: CdkDragDrop<string[]>) {
    console.log("event container data:"+event.container.data);
    console.log("event container item:"+event.item.element.nativeElement.textContent);
    

    console.log(this.responses);
      if (this.responses.includes("Not Good")){
        this.quizService.currentStudent.feelingGood=false;
      }
      if (this.responses.includes("Feeling hot")){
        this.quizService.currentStudent.feelingHot=true;
      }
      if (this.responses.includes("Feeling cold")){
        console.log("FEELING COLD");
        this.quizService.currentStudent.feelingCold=true;
      }
      if (this.responses.includes("It smells bad")){
        this.quizService.currentStudent.smelly=true;
      }
      if (this.responses.includes("I have a headache")){
        this.quizService.currentStudent.headache=true;
      }
      if (this.responses.includes("I feel like it is wet")){
        this.quizService.currentStudent.feelingWet=true;
      }
      if (this.responses.includes("I feel like it is dry")){
        this.quizService.currentStudent.feelingDry=true;
      }

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

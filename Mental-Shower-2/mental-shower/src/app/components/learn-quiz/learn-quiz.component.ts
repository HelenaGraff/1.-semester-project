import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { JsonPipe } from '@angular/common';
import {createAnimation, Animation} from '@ionic/core'


@Component({
  selector: 'app-learn-quiz',
  templateUrl: './learn-quiz.component.html',
  styleUrls: ['./learn-quiz.component.scss'],
})
export class LearnQuizComponent implements OnInit {

  @Input("question") question:string;
  @Input("answers") answers:string[];
  @Input("responses") responses:string[];
  @Input("correctAnswers") correctAnswers:string[];

  success:boolean;
  dragDisabled:boolean;

  constructor() { }

  ngOnInit() {}
  drop(event: CdkDragDrop<string[]>) {
    console.log("event container data:"+event.container.data);
    console.log("event container item:"+event.item.element.nativeElement.textContent);
    

    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    console.log("answers:"+JSON.stringify (this.answers));
    console.log("responses:"+JSON.stringify (this.responses));
    console.log("correct answers:"+JSON.stringify (this.correctAnswers));

    if (JSON.stringify(this.responses.sort()) === JSON.stringify(this.correctAnswers.sort())){
      
      this.success=true;
      createAnimation().addElement(document.querySelector(".answerCard")).duration(500).iterations(1).keyframes([{offset:0,background:'white'},{offset:1,background:'#c2ff68'}]).play({sync:false})
    }
  }


  

}


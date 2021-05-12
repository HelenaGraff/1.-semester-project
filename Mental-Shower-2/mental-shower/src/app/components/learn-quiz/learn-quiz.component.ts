import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { JsonPipe } from '@angular/common';



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

    if (JSON.stringify (this.answers) === JSON.stringify (this.correctAnswers)){console.log ('Hurray')}
  }

}


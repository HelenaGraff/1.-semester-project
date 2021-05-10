import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'quiz-zone',
  templateUrl: './quiz-zone.component.html',
  styleUrls: ['./quiz-zone.component.scss'],
})
export class QuizZoneComponent implements OnInit {
  
  @Input("question") question:string[];
  @Input("answers") answers:string[];
  @Input("responses") responses:string[];


  
  constructor() { }

  ngOnInit() {}
  
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

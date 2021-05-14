import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


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
  
  constructor() { }

  ngOnInit() {}
  
  drop(event: CdkDragDrop<string[]>) {
    console.log("event container data:"+event.container.data);
    console.log("event container item:"+event.item.element.nativeElement.textContent);
    

    if  (event.item.element.nativeElement.textContent=="I feel like it is dry"){
      this.dragDisabled=true;
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

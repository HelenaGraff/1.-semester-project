import { Component, OnInit, Input, Output, ViewChildren,ElementRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { JsonPipe } from '@angular/common';
import {createAnimation, Animation} from '@ionic/core'
import { EventEmitter }from '@angular/core';
import { QueryList } from '@angular/core';
import { AlertController, IonCard, ToastController } from '@ionic/angular';
import { reduce } from 'rxjs/operators';



@Component({
  selector: 'app-learn-quiz',
  templateUrl: './learn-quiz.component.html',
  styleUrls: ['./learn-quiz.component.scss'],
})
export class LearnQuizComponent implements OnInit {
  @ViewChildren("answer") finalAnswers: QueryList<ElementRef>;
  @Input("question") question:string;
  @Input("answers") answers:string[];
  @Input("responses") responses:string[];
  @Input("correctAnswers") correctAnswers:string[];
  @Input("cardClass") cardClass:string;
  @Input("success")success:boolean;


  @Output("successEvent") successEvent=new EventEmitter();
  dragDisabled:boolean;

  constructor(public toastController: ToastController, public alertController:AlertController) { }

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


    if ( !this.correctAnswers.includes(event.container.data[event.currentIndex])   ){
      console.log(event.container.data[event.currentIndex]);
    
     
      console.log(this.finalAnswers);
      console.log(this.finalAnswers.length);


      if (this.responses.includes(event.container.data[event.currentIndex])){
      this.presentToastRed();
      }
     

      console.log("WRONG ANSWER DUDE");
     
    }
    else{
      if (this.responses.includes(event.container.data[event.currentIndex])){
        
        
       
      this.presentToastGreen();
    }
    }

    if (JSON.stringify(this.responses.sort()) === JSON.stringify(this.correctAnswers.sort())){
      console.log("SUCCESS")
      
      createAnimation().addElement(document.querySelector("."+this.cardClass)).duration(500).iterations(1).keyframes([{offset:0,background:'white'},{offset:1,background:'#c2ff68'}]).play({sync:false}).then(()=>{
        this.alertShow().then(()=>{
      
         setTimeout(() => {
          this.success=true;
          this.successEvent.emit("");
         }, 1500); 
        });
       
      })
   
    }
  }

  async presentToastRed(){
    const toast=this.toastController.create({
      message:"Wrong Answer!",  
      cssClass:"wrongAnswer",
      color:"danger",
      duration:500
    });
     (await toast).present();
  }

  async presentToastGreen(){
    const toast=this.toastController.create({
      message:"This answer is correct!",  
      cssClass:"wrongAnswer",
      duration:500
    });
     (await toast).present();
  }

  async alertShow(){
    const alert=this.alertController.create({
      subHeader:"Here comes the next question!",
      header:"Congratulations!"
    })
    ;(await alert).present();
    
     setTimeout (() => {
      async function doshit(){ 
      (await alert).dismiss();
      }
      doshit();
    }, 1500);
    
  }

  

}


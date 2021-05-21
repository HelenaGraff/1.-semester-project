import { Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';
import { FirestoreCrudService } from 'src/app/services/firestore-crud.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
})
export class ZoneComponent implements OnInit {

 

  zones=[{zoneId:"1",students:new Array<student>(),matchPercentage:0},{zoneId:"2",students:new Array<student>(),matchPercentage:0},{zoneId:"3",students:new Array<student>(),matchPercentage:0},{zoneId:"4",students:new Array<student>(),matchPercentage:0}];
  students:student[];
  constructor(public firestore:FirestoreCrudService, public quizService:QuizServiceService,public sanitizer:DomSanitizer, public alertController:AlertController) { 
    
    firestore.get("student").subscribe(data=>{
      this.students=data.map(s=>{
        
        return{
          id:s.payload.doc.id,
          ...s.payload.doc.data() as student
        }
      });
      
      this.zones.forEach(zone => {

          
        
        //console.log("looking for students with zoneId:"+zone.zoneId+ ";looking through students:"+this.students);

        let foundStudents:student[]=new Array();

      this.students.forEach(student=>{
        if (student.zoneId==zone.zoneId){
foundStudents.push(student);
        }
      })  
        
    //  let foundStudents= this.students.filter(x=>{x.zoneId==zone.zoneId});
      zone.students=[];
      foundStudents.forEach(studentFound=>{

        //console.log("found student:"+ studentFound.id);
        zone.students.push(studentFound);
      });




      });


      this.zones.forEach(zone=>{
        zone.students.forEach(student=>{

          console.log(quizService.currentStudent.feelingCold);

          let matchPercentage:number=100;
          let matchingProperties=0;
          if (student.feelingCold && quizService.currentStudent.feelingCold){
            console.log("yea");
            matchPercentage-=100/6;
            matchingProperties++;
          }
          if (student.feelingHot && quizService.currentStudent.feelingHot){
            matchPercentage-=100/6;
            matchingProperties++;
          }
          if (student.feelingDry && quizService.currentStudent.feelingDry){
            matchPercentage-=100/6;
            matchingProperties++;
          }
          if (student.feelingWet && quizService.currentStudent.feelingWet){
            matchPercentage-=100/6;
            matchingProperties++;
          }
          if (student.headache && quizService.currentStudent.headache){
            matchPercentage-=100/6;
            matchingProperties++;
          }
          if (student.smelly && quizService.currentStudent.smelly){
            matchPercentage-=100/6;
            matchingProperties++;
          }
          //zone.matchPercentage=Math.floor(matchPercentage);

          
        })
      })
     
    })


  }

  public max():any
  {
    var max=this.zones[0];
    this.zones.forEach(zone=>{
      if (max.matchPercentage<zone.matchPercentage){
        max=zone;
      }
    })
    return max;
  }

  ngOnInit() {
    this.fillMatchFakeData();
  }

  async zoneJoin(index:any){
    console.log("click");
  // const alert=  this.alertController.create({
 //     header:"Are you sure you want to join the zone?",
 //     buttons:['Yes','No'],
 //     cssClass:"zoneAlert",
      
      
 //   });
  //   (await alert).present();
  console.log(this.quizService.currentStudent);
  this.quizService.currentStudent.zoneId=index;


  (this.firestore.getWithId("student",this.quizService.currentStudent.id).subscribe(data=>{
     var fin=data as student;
     console.log(fin);
     if (fin==undefined){
     this.firestore.createWithId("student",this.quizService.currentStudent.id,this.quizService.currentStudent);
     console.log("new");
     }
     else{
      console.log("updating");
      this.firestore.update("student",this.quizService.currentStudent.id,this.quizService.currentStudent) ;}
     }
  ))

  
    
    
  }
  fillMatchFakeData(){
    this.zones.forEach(zone=>{
      zone.matchPercentage=Math.floor(Math.random()*100);
    })
  }

  public isBiggestMatch(index:number):boolean{

   try {
   this.zones.forEach(zone => {
      if (zone[index].matchPercentage<zone.matchPercentage){
        return false;
      }
     
    });
    return true;

  }
  catch{

  }
  
    
  }


}





interface student{
  id:string;
  feelingCold:boolean,
 feelingHot:boolean,
  feelingWet:boolean,
   feelingGood:boolean,
   feelingDry:boolean,
  smelly:boolean,
  headache:boolean,
 zoneId:string,

}
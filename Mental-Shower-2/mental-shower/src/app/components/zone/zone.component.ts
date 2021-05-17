import { Component, OnInit } from '@angular/core';
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
  constructor(firestore:FirestoreCrudService, quizService:QuizServiceService) { 

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
          zone.matchPercentage=Math.floor(matchPercentage);
          
          
        })
      })
     
    })


  }

  ngOnInit() {}

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
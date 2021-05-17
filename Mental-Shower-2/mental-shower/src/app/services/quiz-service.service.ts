import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  public currentStudent:student={};
  constructor() { }
}


interface student{
  id?:string;
  feelingCold?:boolean,
 feelingHot?:boolean,
  feelingWet?:boolean,
   feelingGood?:boolean,
   feelingDry?:boolean,
  smelly?:boolean,
  headache?:boolean,
 zoneId?:string,

}
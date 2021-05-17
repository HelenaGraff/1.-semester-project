import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from 'src/app/services/http-service.service'
import { FirestoreCrudService } from '../services/firestore-crud.service';
@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {

  constructor(private httpService:HttpServiceService,firestore:FirestoreCrudService) { 
    




  }
   temperature:number;
   forecast:string;
   humidity:number;
  ngOnInit() {
  this.httpService.get().subscribe(data=>{
    this.temperature=data.main.temp;
   this.forecast=data.weather["0"].main;
   this.temperature= Math.round(this.temperature);
   this.humidity=data.main.humidity;
  })
  }

}

interface student{
  feelingCold:boolean,
 feelingHot:boolean,
  feelingWet:boolean,
   feelingGood:boolean,
   feelingDry:boolean,
  smelly:boolean,
  headache:boolean,
 zoneId:string,

}

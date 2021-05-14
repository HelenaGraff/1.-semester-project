import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from 'src/app/services/http-service.service'
@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {

  constructor(private httpService:HttpServiceService) { }
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

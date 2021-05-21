import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from 'src/app/services/http-service.service'
import { FirestoreCrudService } from '../services/firestore-crud.service';
import { AlertController, IonCard, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {

  constructor(private httpService:HttpServiceService,firestore:FirestoreCrudService, public toastController: ToastController) { 
    




  }

  async presentToastGreen(){
    const toast=this.toastController.create({
      message:"Zone successfully joined!",  
      cssClass:"ZoneJoined",
      color:"success",
      duration:500
    });
     (await toast).present();
     
     
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


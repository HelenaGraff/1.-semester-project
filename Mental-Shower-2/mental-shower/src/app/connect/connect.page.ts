import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {CardServiceService} from 'src/app/services/card-service.service'
@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})


export class ConnectPage implements OnInit {

  constructor(public toastController: ToastController, public cardService:CardServiceService) {}

  ngOnInit() {
  }


  public get cardPath(){
    return this.cardService.currentIdPath;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Connected successfully',
      duration: 2000,
      cssClass: 'cardConnected',
    });
    toast.present();
  }
}

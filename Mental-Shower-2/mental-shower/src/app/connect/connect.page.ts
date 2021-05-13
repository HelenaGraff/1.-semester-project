import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})


export class ConnectPage implements OnInit {

  constructor(public toastController: ToastController) {}

  ngOnInit() {
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

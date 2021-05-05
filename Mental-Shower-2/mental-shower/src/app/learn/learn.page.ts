import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {LearnModalPage} from 'src/app/learn/learn-modal/learn-modal.page';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {

  constructor(public modalController: ModalController) {

   }

  ngOnInit() {
  }
  async testClick(){
    const modal = await this.modalController.create({
      component: LearnModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}

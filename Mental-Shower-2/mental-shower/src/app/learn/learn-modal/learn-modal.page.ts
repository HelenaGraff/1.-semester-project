import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-learn-modal',
  templateUrl: './learn-modal.page.html',
  styleUrls: ['./learn-modal.page.scss'],
})
export class LearnModalPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {

  }
  closeModal(){
    console.log("hello");
this.modalController.dismiss();
  }
}

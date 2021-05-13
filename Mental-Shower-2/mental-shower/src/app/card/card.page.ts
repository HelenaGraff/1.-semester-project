import { Component, OnInit } from '@angular/core';
import {CardServiceService} from 'src/app/services/card-service.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(public cardService:CardServiceService) { }

  

  public cardClick(cardUrl:string){
   this.cardService.currentIdPath=cardUrl;
  }

  ngOnInit() {
  }

}

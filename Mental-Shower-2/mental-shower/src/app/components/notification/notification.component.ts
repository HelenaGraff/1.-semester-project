import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  @Input("notificationBody") notificationBody:string;
  @Input("quickFix") quickFix:string;
  @Input("minsAgo") minsAgo:string;
  constructor() { }

  ngOnInit() {}

}

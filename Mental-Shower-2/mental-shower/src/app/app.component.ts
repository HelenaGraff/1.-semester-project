import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Connect', url: 'connect', icon: 'radio' },
    { title: 'Mood', url: 'quiz', icon: 'happy' },
    { title: 'Zones', url: 'zones', icon: 'grid' },
    
    { title: 'Learn', url: 'learn', icon: 'bulb' },
    { title: 'Card', url: 'card', icon: 'card' },
   
   
    

    { title: 'Notifications', url: 'notifications', icon: 'notifications' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

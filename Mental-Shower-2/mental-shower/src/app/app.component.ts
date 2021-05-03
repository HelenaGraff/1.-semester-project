import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Floors', url: '/folder/Floors', icon: 'business' },
    { title: 'Rooms', url: '/folder/Rooms', icon: 'location' },
    { title: 'Zones', url: '/folder/Zones', icon: 'grid' },
    { title: 'Quiz', url: '/folder/Quiz', icon: 'reader' },
    { title: 'Learn', url: '/folder/Learn', icon: 'bulb' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

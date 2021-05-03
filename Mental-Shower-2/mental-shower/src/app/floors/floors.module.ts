import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloorsPageRoutingModule } from './floors-routing.module';

import { FloorsPage } from './floors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloorsPageRoutingModule
  ],
  declarations: [FloorsPage]
})
export class FloorsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnModalPageRoutingModule } from './learn-modal-routing.module';

import { LearnModalPage } from './learn-modal.page';
import { DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnModalPageRoutingModule,
    DragDropModule
  ],
  declarations: [LearnModalPage]
})
export class LearnModalPageModule {}

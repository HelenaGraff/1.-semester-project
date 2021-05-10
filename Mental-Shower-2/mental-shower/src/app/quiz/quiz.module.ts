import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { IonicModule } from '@ionic/angular';
import {QuizZoneComponent} from 'src/app/components/quiz-zone/quiz-zone.component';
import { QuizPageRoutingModule } from './quiz-routing.module';

import { QuizPage } from './quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPageRoutingModule,
    DragDropModule
  ],
  declarations: [QuizPage,QuizZoneComponent]
})
export class QuizPageModule {}

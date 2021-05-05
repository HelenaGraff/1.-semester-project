import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnModalPage } from './learn-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LearnModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnModalPageRoutingModule {}

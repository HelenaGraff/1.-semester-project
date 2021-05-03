import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloorsPage } from './floors.page';

const routes: Routes = [
  {
    path: '',
    component: FloorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloorsPageRoutingModule {}

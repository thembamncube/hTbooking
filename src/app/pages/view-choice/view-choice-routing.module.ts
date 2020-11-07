import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChoicePage } from './view-choice.page';

const routes: Routes = [
  {
    path: '',
    component: ViewChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewChoicePageRoutingModule {}

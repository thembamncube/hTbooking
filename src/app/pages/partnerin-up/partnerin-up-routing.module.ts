import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerinUpPage } from './partnerin-up.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerinUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerinUpPageRoutingModule {}

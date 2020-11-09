import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddproduclearPage } from './addproduclear.page';

const routes: Routes = [
  {
    path: '',
    component: AddproduclearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddproduclearPageRoutingModule {}

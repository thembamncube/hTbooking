import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninUpPage } from './signin-up.page';

const routes: Routes = [
  {
    path: '',
    component: SigninUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninUpPageRoutingModule {}

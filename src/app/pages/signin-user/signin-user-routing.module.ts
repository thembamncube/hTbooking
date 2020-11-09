import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninUserPage } from './signin-user.page';

const routes: Routes = [
  {
    path: '',
    component: SigninUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninUserPageRoutingModule {}

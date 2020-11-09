import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninUserPageRoutingModule } from './signin-user-routing.module';

import { SigninUserPage } from './signin-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninUserPageRoutingModule
  ],
  declarations: [SigninUserPage]
})
export class SigninUserPageModule {}

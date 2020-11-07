import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninUpPageRoutingModule } from './signin-up-routing.module';

import { SigninUpPage } from './signin-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninUpPageRoutingModule
  ],
  declarations: [SigninUpPage]
})
export class SigninUpPageModule {}

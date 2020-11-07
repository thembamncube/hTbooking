import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerinUpPageRoutingModule } from './partnerin-up-routing.module';

import { PartnerinUpPage } from './partnerin-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerinUpPageRoutingModule
  ],
  declarations: [PartnerinUpPage]
})
export class PartnerinUpPageModule {}

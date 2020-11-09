import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddproduclearPageRoutingModule } from './addproduclear-routing.module';

import { AddproduclearPage } from './addproduclear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddproduclearPageRoutingModule
  ],
  declarations: [AddproduclearPage]
})
export class AddproduclearPageModule {}

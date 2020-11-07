import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewChoicePageRoutingModule } from './view-choice-routing.module';

import { ViewChoicePage } from './view-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewChoicePageRoutingModule
  ],
  declarations: [ViewChoicePage]
})
export class ViewChoicePageModule {}

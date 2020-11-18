import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubCityPageRoutingModule } from './sub-city-routing.module';

import { SubCityPage } from './sub-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubCityPageRoutingModule
  ],
  declarations: [SubCityPage]
})
export class SubCityPageModule {}

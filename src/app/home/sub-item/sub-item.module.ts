import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubItemPageRoutingModule } from './sub-item-routing.module';

import { SubItemPage } from './sub-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubItemPageRoutingModule
  ],
  declarations: [SubItemPage]
})
export class SubItemPageModule {}

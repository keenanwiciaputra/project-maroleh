import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DikirimPageRoutingModule } from './dikirim-routing.module';

import { DikirimPage } from './dikirim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DikirimPageRoutingModule
  ],
  declarations: [DikirimPage]
})
export class DikirimPageModule {}

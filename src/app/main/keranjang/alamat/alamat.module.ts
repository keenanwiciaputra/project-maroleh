import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlamatPageRoutingModule } from './alamat-routing.module';

import { AlamatPage } from './alamat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlamatPageRoutingModule
  ],
  declarations: [AlamatPage]
})
export class AlamatPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeskripsiPageRoutingModule } from './deskripsi-routing.module';

import { DeskripsiPage } from './deskripsi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeskripsiPageRoutingModule
  ],
  declarations: [DeskripsiPage]
})
export class DeskripsiPageModule {}

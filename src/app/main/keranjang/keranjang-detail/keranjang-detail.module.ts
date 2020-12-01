import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeranjangDetailPageRoutingModule } from './keranjang-detail-routing.module';

import { KeranjangDetailPage } from './keranjang-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeranjangDetailPageRoutingModule
  ],
  declarations: [KeranjangDetailPage]
})
export class KeranjangDetailPageModule {}

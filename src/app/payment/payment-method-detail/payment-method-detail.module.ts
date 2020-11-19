import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentMethodDetailPageRoutingModule } from './payment-method-detail-routing.module';

import { PaymentMethodDetailPage } from './payment-method-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentMethodDetailPageRoutingModule
  ],
  declarations: [PaymentMethodDetailPage]
})
export class PaymentMethodDetailPageModule {}

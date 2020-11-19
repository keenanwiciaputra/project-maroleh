import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentProcessPageRoutingModule } from './payment-process-routing.module';

import { PaymentProcessPage } from './payment-process.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentProcessPageRoutingModule
  ],
  declarations: [PaymentProcessPage]
})
export class PaymentProcessPageModule {}

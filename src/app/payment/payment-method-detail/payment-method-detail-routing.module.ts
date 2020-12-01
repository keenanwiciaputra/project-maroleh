import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentMethodDetailPage } from './payment-method-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentMethodDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentMethodDetailPageRoutingModule {}

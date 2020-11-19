import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentProcessPage } from './payment-process.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentProcessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentProcessPageRoutingModule {}

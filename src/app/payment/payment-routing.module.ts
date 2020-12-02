import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPage } from './payment.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPage
  },
  {
    path: 'payment-method-detail/:id',
    loadChildren: () => import('./payment-method-detail/payment-method-detail.module').then( m => m.PaymentMethodDetailPageModule)
  },
  {
    path: 'payment-process',
    loadChildren: () => import('./payment-process/payment-process.module').then( m => m.PaymentProcessPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageRoutingModule {}

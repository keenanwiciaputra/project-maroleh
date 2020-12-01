import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeranjangDetailPage } from './keranjang-detail.page';

const routes: Routes = [
  {
    path: '',
    component: KeranjangDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeranjangDetailPageRoutingModule {}

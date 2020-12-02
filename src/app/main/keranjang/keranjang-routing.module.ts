import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeranjangPage } from './keranjang.page';

const routes: Routes = [
  {
    path: '',
    component: KeranjangPage
  },
  {
    path: 'keranjang-detail',
    loadChildren: () => import('./keranjang-detail/keranjang-detail.module').then( m => m.KeranjangDetailPageModule)
  },
  {
    path: 'alamat',
    loadChildren: () => import('./alamat/alamat.module').then( m => m.AlamatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeranjangPageRoutingModule {}

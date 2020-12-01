import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'pembayaran',
    loadChildren: () => import('./pembayaran/pembayaran.module').then( m => m.PembayaranPageModule)
  },
  {
    path: 'proses',
    loadChildren: () => import('./proses/proses.module').then( m => m.ProsesPageModule)
  },
  {
    path: 'dikirim',
    loadChildren: () => import('./dikirim/dikirim.module').then( m => m.DikirimPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then( m => m.PengaturanPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}

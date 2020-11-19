import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: MainPage,
    children: [
      {
        path: 'keranjang',
        loadChildren: () => import('./keranjang/keranjang.module').then( m => m.KeranjangPageModule)
      },
      {
        path: 'notif',
        loadChildren: () => import('./notif/notif.module').then( m => m.NotifPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      }
    ]
  },  {
    path: 'deskripsi',
    loadChildren: () => import('./deskripsi/deskripsi.module').then( m => m.DeskripsiPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}

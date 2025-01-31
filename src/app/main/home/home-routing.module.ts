import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'sub-city/:daerah',
    loadChildren: () => import('./sub-city/sub-city.module').then( m => m.SubCityPageModule)
  },
  {
    path: 'sub-item/:kategori',
    loadChildren: () => import('./sub-item/sub-item.module').then( m => m.SubItemPageModule)
  },  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

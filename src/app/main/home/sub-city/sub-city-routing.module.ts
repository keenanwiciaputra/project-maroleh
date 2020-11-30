import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubCityPage } from './sub-city.page';

const routes: Routes = [
  {
    path: '',
    component: SubCityPage
  },
  {
    path: ':kategori',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCityPageRoutingModule {}

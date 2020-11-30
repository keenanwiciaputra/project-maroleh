import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubItemPage } from './sub-item.page';

const routes: Routes = [
  {
    path: '',
    component: SubItemPage
  },
  {
    path: 'products/:id',
    loadChildren: () => import('../../../products/products.module').then( m => m.ProductsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubItemPageRoutingModule {}

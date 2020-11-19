import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubItemPage } from './sub-item.page';

const routes: Routes = [
  {
    path: '',
    component: SubItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubItemPageRoutingModule {}

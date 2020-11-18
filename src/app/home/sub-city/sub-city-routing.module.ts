import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubCityPage } from './sub-city.page';

const routes: Routes = [
  {
    path: '',
    component: SubCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCityPageRoutingModule {}

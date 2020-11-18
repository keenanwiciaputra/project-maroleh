import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DikirimPage } from './dikirim.page';

const routes: Routes = [
  {
    path: '',
    component: DikirimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DikirimPageRoutingModule {}

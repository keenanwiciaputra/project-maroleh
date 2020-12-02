import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlamatPage } from './alamat.page';

const routes: Routes = [
  {
    path: '',
    component: AlamatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlamatPageRoutingModule {}

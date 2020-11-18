import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeskripsiPage } from './deskripsi.page';

const routes: Routes = [
  {
    path: '',
    component: DeskripsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeskripsiPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'sub-city',
    loadChildren: () => import('./sub-city/sub-city.module').then( m => m.SubCityPageModule)
  },  {
    path: 'sub-item',
    loadChildren: () => import('./sub-item/sub-item.module').then( m => m.SubItemPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

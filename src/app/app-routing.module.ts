import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./main/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'notif',
    loadChildren: () => import('./main/notif/notif.module').then( m => m.NotifPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./loginpage/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./loginpage/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./loginpage/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./loginpage/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./main/profile/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },

  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

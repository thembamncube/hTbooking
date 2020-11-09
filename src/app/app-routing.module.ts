import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'signin-user',
    pathMatch: 'full'
  },
  
  {
    path: 'home-screen',
    loadChildren: () => import('./pages/home-screen/home-screen.module').then( m => m.HomeScreenPageModule)
  },
  {
    path: 'view-choice',
    loadChildren: () => import('./pages/view-choice/view-choice.module').then( m => m.ViewChoicePageModule)
  },
  
  
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'signin-user',
    loadChildren: () => import('./pages/signin-user/signin-user.module').then( m => m.SigninUserPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./pages/register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'register-client',
    loadChildren: () => import('./pages/register-client/register-client.module').then( m => m.RegisterClientPageModule)
  },
  {
    path: 'signin-client',
    loadChildren: () => import('./pages/signin-client/signin-client.module').then( m => m.SigninClientPageModule)
  },  {
    path: 'addproduct',
    loadChildren: () => import('./pages/addproduct/addproduct.module').then( m => m.AddproductPageModule)
  },
  {
    path: 'addproduclear',
    loadChildren: () => import('./pages/addproduclear/addproduclear.module').then( m => m.AddproduclearPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

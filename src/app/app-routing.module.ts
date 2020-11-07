import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'signin-up',
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
    path: 'signin-up',
    loadChildren: () => import('./pages/signin-up/signin-up.module').then( m => m.SigninUpPageModule)
  },
  {
    path: 'partnerin-up',
    loadChildren: () => import('./pages/partnerin-up/partnerin-up.module').then( m => m.PartnerinUpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

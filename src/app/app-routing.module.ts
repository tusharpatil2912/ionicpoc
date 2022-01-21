import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/core/auth/auth.guard';
import { AutoLoginGuard } from './modules/core/auth/auto-login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/features/home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/features/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AutoLoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/features/register/register.module').then( m => m.RegisterPageModule)
  }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

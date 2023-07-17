import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { Page3Page } from './page3/page3.page';
import { Page4Page } from './page4/page4.page';
import { Page4PageModule } from './page4/page4.module';
import { Page5Page } from './page5/page5.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./page0/page0.module').then( m => m.Page0PageModule)
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'page2',
    component: Page2Component,
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'page4',
    component: Page4Page,
    loadChildren: () => import('./page4/page4.module').then( m => m.Page4PageModule)
  },
  {
    path: 'page5',
    component: Page5Page,
    loadChildren: () => import('./page5/page5.module').then( m => m.Page5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

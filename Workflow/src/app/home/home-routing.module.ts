import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { Page2Component } from '../page2/page2.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'page2',
    component: Page2Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

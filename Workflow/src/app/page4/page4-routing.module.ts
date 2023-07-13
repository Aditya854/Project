import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page4Page } from './page4.page';
import { Page3Page } from '../page3/page3.page';

const routes: Routes = [
  {
    path: '',
    component: Page4Page
  },
  {
    path: 'page3',
    component: Page3Page
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page4PageRoutingModule {}

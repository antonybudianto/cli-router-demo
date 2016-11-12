import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feat1Component } from './feat1.component';

const routes: Routes = [
    {
        path: '',
        component: Feat1Component
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class Feat1RoutingModule { }

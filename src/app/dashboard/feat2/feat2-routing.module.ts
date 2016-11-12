import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feat2Component } from './feat2.component';

const routes: Routes = [
    {
        path: '',
        component: Feat2Component
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
export class Feat2RoutingModule { }

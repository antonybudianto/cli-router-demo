import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      /**
       * Uncomment this, then open console
       * see the 2nd object, `_loadedConfig` is not there
       **/
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'feat1',
        loadChildren: './feat1/feat1.module#Feat1Module'
      },
      {
        path: 'feat2',
        loadChildren: './feat2/feat2.module#Feat2Module'
      }
    ]
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
export class DashboardRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feat2Component } from './feat2.component';
import { Feat2RoutingModule } from './feat2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Feat2RoutingModule
  ],
  declarations: [Feat2Component]
})
export class Feat2Module { }

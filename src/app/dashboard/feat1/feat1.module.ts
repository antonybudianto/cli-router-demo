import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feat1Component } from './feat1.component';
import { Feat1RoutingModule } from './feat1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Feat1RoutingModule
  ],
  declarations: [Feat1Component]
})
export class Feat1Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';

import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    HomeModule
  ],
  exports: [
    HomeModule,
  ]
})
export class ModulesModule { }

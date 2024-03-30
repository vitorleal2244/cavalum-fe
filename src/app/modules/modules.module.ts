import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    HomeModule,
  ]
})
export class ModulesModule {}

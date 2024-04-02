import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TrailsComponent } from './trails/trails.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    TrailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
  ],
  exports: [
    HomeModule,
    AboutComponent,
    TrailsComponent,
    ContactComponent,
  ]
})
export class ModulesModule {}

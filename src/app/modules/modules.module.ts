import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
  ],
  exports: [
    HomeModule,
    AboutComponent,
    ContactComponent,
  ]
})
export class ModulesModule {}

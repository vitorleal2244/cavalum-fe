import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TrailsComponent } from './trails/trails.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    TrailsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
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

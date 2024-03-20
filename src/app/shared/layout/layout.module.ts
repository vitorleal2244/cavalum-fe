import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { TabBarComponent } from './tab-bar/tab-bar.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    TabBarComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    MdbCarouselModule
  ],
  exports: [
    TabBarComponent,
    SliderComponent
  ]
})
export class LayoutModule { }

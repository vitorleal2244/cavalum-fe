import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { TabBarComponent } from './tab-bar/tab-bar.component';
import { SliderComponent } from './slider/slider.component';
import { ButtonComponent } from './button/button.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CardComponent } from './card/card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { LastUpdatesComponent } from './last-updates/last-updates.component';

@NgModule({
  declarations: [
    TabBarComponent,
    SliderComponent,
    ButtonComponent,
    TestimonialComponent,
    CardComponent,
    GalleryComponent,
    NewsComponent,
    LastUpdatesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MdbCarouselModule
  ],
  exports: [
    TabBarComponent,
    SliderComponent,
    ButtonComponent,
    TestimonialComponent,
    CardComponent,
    GalleryComponent,
    NewsComponent,
    LastUpdatesComponent,
    FooterComponent
  ]
})
export class LayoutModule { }

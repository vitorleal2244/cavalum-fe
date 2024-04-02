import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { TabBarComponent } from './tab-bar/tab-bar.component';
import { SliderComponent } from './slider/slider.component';
import { ButtonComponent } from './button/button.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CardComponent } from './card/card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { ImageTextComponent } from './image-text/image-text.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ModalBgComponent } from './modal-bg/modal-bg.component';


@NgModule({
  declarations: [
    TabBarComponent,
    SliderComponent,
    ButtonComponent,
    TestimonialComponent,
    CardComponent,
    GalleryComponent,
    NewsComponent,
    ImageTextComponent,
    ImageViewerComponent,
    ModalBgComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MdbCarouselModule,
    RouterModule,
  ],
  exports: [
    TabBarComponent,
    SliderComponent,
    ButtonComponent,
    TestimonialComponent,
    CardComponent,
    GalleryComponent,
    NewsComponent,
    ImageTextComponent,
    ImageViewerComponent,
    ModalBgComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageTextComponent } from './components/image-text/image-text.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ModalBgComponent } from './components/modal-bg/modal-bg.component';
import { NewsComponent } from './components/news/news.component';
import { SliderComponent } from './components/slider/slider.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    FooterComponent,
    GalleryComponent,
    ImageTextComponent,
    ImageViewerComponent,
    ModalBgComponent,
    NewsComponent,
    SliderComponent,
    TabBarComponent,
    TestimonialComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    FooterComponent,
    GalleryComponent,
    ImageTextComponent,
    ImageViewerComponent,
    ModalBgComponent,
    NewsComponent,
    SliderComponent,
    TabBarComponent,
    TestimonialComponent,
  ]
})
export class CoreModule { }

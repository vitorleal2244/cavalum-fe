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
import { TranslateModule } from '@ngx-translate/core';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ProductImageSliderComponent } from './components/store/product-image-slider/product-image-slider.component';
import { ProductInfoComponent } from './components/store/product-info/product-info.component';
import { ProductColorsComponent } from './components/store/product-colors/product-colors.component';
import { ProductSizesComponent } from './components/store/product-sizes/product-sizes.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';

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
    ProductCardComponent,
    ProductImageSliderComponent,
    ProductInfoComponent,
    ProductColorsComponent,
    ProductSizesComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
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
    ProductCardComponent,
    ProductImageSliderComponent,
    ProductInfoComponent,
    ProductColorsComponent,
    ProductSizesComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ]
})
export class CoreModule { }

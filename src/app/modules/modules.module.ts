import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TrailsComponent } from './trails/trails.component';
import { CoreModule } from '../core/core.module';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    TrailsComponent,
    NewsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    AboutComponent,
    TrailsComponent,
    ContactComponent,
    NewsComponent,
  ]
})
export class ModulesModule {}

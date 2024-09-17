import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TranslateModule } from '@ngx-translate/core'
import { NewsListComponent } from './news-list/news-list.component'
import { NewsRoutingModule } from './news-routing.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    NewsRoutingModule,
    NewsListComponent,
    NewsDetailComponent,
  ],
})
export class NewsModule { }

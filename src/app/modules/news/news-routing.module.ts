import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NewsListComponent } from './news-list/news-list.component'
import { NewsDetailComponent } from './news-detail/news-detail.component'

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent,
  },
  {
    path: ':id',
    component: NewsDetailComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}

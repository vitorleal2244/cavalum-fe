import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { TrailsComponent } from './modules/trails/trails.component';
import { NewsComponent } from './modules/news/news.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent
  },
  {
    path: 'trails',
    pathMatch: 'full',
    component: TrailsComponent
  },
  {
    path: 'store',
    pathMatch: 'full',
    loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'news',
    pathMatch: 'full',
    component: NewsComponent
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

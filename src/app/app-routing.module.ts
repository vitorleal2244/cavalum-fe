import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './modules/about/about.component'
import { ContactComponent } from './modules/contact/contact.component'
import { NewsComponent } from './modules/news/news.component'
import { BecomeMemberComponent } from './modules/become-member/become-member.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./modules/store/store.module').then((m) => m.StoreModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./modules/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'trails',
    loadChildren: () =>
      import('./modules/trails/trails.module').then((m) => m.TrailsModule),
  },
  {
    path: 'news',
    pathMatch: 'full',
    component: NewsComponent,
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
  },
  {
    path: 'become-member',
    pathMatch: 'full',
    component: BecomeMemberComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './modules/about/about.component'
import { ContactComponent } from './modules/contact/contact.component'
import { BecomeMemberComponent } from './modules/become-member/become-member.component'
import { HomeComponent } from './modules/home/home.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
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
    loadChildren: () =>
      import('./modules/news/news.module').then((m) => m.NewsModule),
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
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

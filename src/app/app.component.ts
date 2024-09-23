import { Component } from '@angular/core'
import { TranslateService, TranslateModule } from '@ngx-translate/core'
import { NgxSpinnerModule } from 'ngx-spinner'
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router'
import { FooterComponent } from './core/components/footer/footer.component'
import { TabBarComponent } from './core/components/tab-bar/tab-bar.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    NgxSpinnerModule,
    TranslateModule,
    FooterComponent,
    TabBarComponent,
    CommonModule,
  ],
})
export class AppComponent {
  public showLoading = true

  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang('pt')
    translate.use('pt')

    router.events.subscribe((event: any) => {
      this.navigationInterceptor(event)
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showLoading = true
    }
    if (event instanceof NavigationEnd) {
      this.showLoading = false
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showLoading = false
    }
    if (event instanceof NavigationError) {
      this.showLoading = false
    }
  }
}

import { Component, OnInit } from '@angular/core'
import { TranslateService, TranslateModule } from '@ngx-translate/core'
import { NgxSpinnerModule } from 'ngx-spinner'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from './core/components/footer/footer.component'
import { TabBarComponent } from './core/components/tab-bar/tab-bar.component'
import { CommonModule } from '@angular/common'
import { LoadingService } from './core/services/loading.service'
import { delay } from 'rxjs'

/**
 * App Component
 *
 * @class
 * @exports
 * @implements {OnInit}
 */
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
export class AppComponent implements OnInit {
  public loading: boolean = false

  constructor(
    private readonly translate: TranslateService,
    private readonly loadingService: LoadingService
  ) {
    translate.setDefaultLang('pt')
    translate.use('pt')
  }

  ngOnInit() {
    this.listenToLoading()
  }

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   *
   * @returns {void}
   *
   * @memberof AppComponent
   */
  listenToLoading(): void {
    this.loadingService.loadingSub.pipe(delay(0)).subscribe((loading) => {
      this.loading = loading
    })
  }
}

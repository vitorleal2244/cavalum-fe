import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { createTranslationLoader } from './app/app.module';
import { AppComponent } from './app/app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { withInterceptorsFromDi, provideHttpClient, HttpClient } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LOCALE_ID, isDevMode, importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, NgxSpinnerModule, TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslationLoader),
            deps: [HttpClient]
        },
        defaultLanguage: 'pt'
    }), MdbAccordionModule, MdbCarouselModule, MdbCheckboxModule, MdbCollapseModule, MdbDropdownModule, MdbFormsModule, MdbModalModule, MdbPopoverModule, MdbRadioModule, MdbRangeModule, MdbRippleModule, MdbScrollspyModule, MdbTabsModule, MdbTooltipModule, MdbValidationModule, StoreModule.forRoot({}, {}), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })),
    { provide: LOCALE_ID, useValue: 'pt-PT' },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideAnimations()
]
})
  .catch(err => console.error(err));

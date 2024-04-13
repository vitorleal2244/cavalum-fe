import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StoreRoutingModule } from './store-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    TranslateModule,
    CoreModule,
  ]
})
export class StoreModule { }

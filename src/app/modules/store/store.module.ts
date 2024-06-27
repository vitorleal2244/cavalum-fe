import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StoreRoutingModule } from './store-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
    imports: [
    CommonModule,
    StoreRoutingModule,
    TranslateModule,
    ListComponent,
    DetailComponent,
]
})
export class StoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrailsRoutingModule } from './trails-routing.module';

import { TranslateModule } from '@ngx-translate/core';
import { ListTrailsComponent } from './list-trails/list-trails.component';
import { DetailTrailComponent } from './detail-trail/detail-trail.component';

@NgModule({
    imports: [
    CommonModule,
    TranslateModule.forChild(),
    TrailsRoutingModule,
    ListTrailsComponent,
    DetailTrailComponent,
]
})
export class TrailsModule { }

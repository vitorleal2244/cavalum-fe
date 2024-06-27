/*
 * File: trails-routing.module.ts
 * Project: Cavalum
 * Created: Sunday, 28th April 2024 1:02:00 pm
 * Last Modified: Thursday, 2nd May 2024 3:01:27 pm
 * Copyright © 2024 Vitor Leal
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTrailsComponent } from './list-trails/list-trails.component';
import { DetailTrailComponent } from './detail-trail/detail-trail.component';

const routes: Routes = [
  {
    component: ListTrailsComponent,
  },
  {
    path: ':id',
    component: DetailTrailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrailsRoutingModule {}

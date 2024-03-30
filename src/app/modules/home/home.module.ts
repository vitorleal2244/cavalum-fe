import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { ManWalkingComponent } from 'src/assets/images/svg/man_walking/man_walking.component';
import { SvgMedicalCaseComponent } from 'src/assets/images/svg/medical_case/svg_medical_case.component';
import { SvgManChildComponent } from 'src/assets/images/svg/man_child/svg_man_child.component';
import { SvgMapComponent } from 'src/assets/images/svg/map/svg_map.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ManWalkingComponent,
    SvgMedicalCaseComponent,
    SvgManChildComponent,
    SvgMapComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

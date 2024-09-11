/*
 * File: home.component.ts
 * Project: Cavalum
 * Created: Saturday, 27th April 2024 6:00:17 pm
 * Last Modified: Friday, 28th June 2024 10:42:49 am
 * Copyright © 2024 Vitor Leal
 */

import { Component, inject } from '@angular/core'
import { NewsComponent } from '../../core/components/news/news.component'
import { TestimonialComponent } from '../../core/components/testimonial/testimonial.component'
import { SvgMapComponent } from '../../../assets/images/svg/map/svg_map.component'
import { SvgManChildComponent } from '../../../assets/images/svg/man_child/svg_man_child.component'
import { SvgMedicalCaseComponent } from '../../../assets/images/svg/medical_case/svg_medical_case.component'
import { ManWalkingComponent } from '../../../assets/images/svg/man_walking/man_walking.component'
import { SliderComponent } from '../../core/components/slider/slider.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDialog } from '@angular/material/dialog'
import { ScheduleActionComponent } from './dialogs/schedule-action.component'
import { RouterLink } from '@angular/router'

/**
 * Home Component
 *
 * @exports
 * @class
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    SliderComponent,
    ManWalkingComponent,
    SvgMedicalCaseComponent,
    SvgManChildComponent,
    SvgMapComponent,
    TestimonialComponent,
    NewsComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    CommonModule,
    RouterLink,
  ],
})
export class HomeComponent {
  public testimonials = [
    {
      id: 1,
      author: 'Carla',
      position: 'Voluntário',
      text: 'Sou um depoimento. Clique aqui para adicionar um texto que diga algo bom sobre você e sua experiência como voluntário da Cavalum.',
    },
    {
      id: 2,
      author: 'Thyago',
      position: 'Voluntário',
      text: 'Gosto muito de ir ao Cavalum!',
    },
    {
      id: 3,
      author: 'José',
      position: 'Trilhante',
      text: 'O Cavalum foi a minha melhor experiência de sempre!!',
    },
  ]

  public actions = [
    {
      id: 1,
      title: 'Festa de aniversário',
      subtitle: 'Oferecido diariamente',
      price: '80',
    },
    {
      id: 2,
      title: 'Eventos de familia',
      subtitle: 'Oferecido diariamente',
      price: '80',
    },
    {
      id: 3,
      title: 'Eventos de empresa',
      subtitle: 'Oferecido diariamente',
      price: '80',
    },
    {
      id: 4,
      title: 'Eventos de trailing',
      subtitle: 'Oferecido diariamente',
      price: '80',
    },
  ]

  /**
   * Creates an instance of HomeComponent
   *
   * @param {MatDialog} matDialog
   *
   * @memberof HomeComponent
   */
  constructor(private readonly matDialog: MatDialog) {}

  /**
   * When this function is triggered, a modal will appear with ScheduleActionComponent content
   *
   * @return {void}
   *
   * @memberof HomeComponent
   */
  openDialog(): void {
    this.matDialog.open(ScheduleActionComponent, {
      width: '50%',
    })
  }
}

/*
 * File: home.component.ts
 * Project: Cavalum
 * Created: Saturday, 27th April 2024 6:00:17 pm
 * Last Modified: Friday, 28th June 2024 10:42:49 am
 * Copyright © 2024 Vitor Leal
 */

import { Component, OnInit } from '@angular/core'
import { NewsComponent } from '../../core/components/news/news.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDialog } from '@angular/material/dialog'
import { ScheduleActionComponent } from './dialogs/schedule-action.component'
import { RouterLink } from '@angular/router'
import { News } from '../news/news.interface'
import { map, Observable } from 'rxjs'
import { NewsService } from '../news/news.service'
import { CoreService } from 'src/app/core/services/core.service'
import { SliderComponent } from './slider/slider.component'
import { OurActionsComponent } from './our-actions/our-actions.component'
import { Action } from './our-actions/action.interface'
import { KnowMoreComponent } from './know-more/know-more.component'
import { TestimonialsComponent } from './testimonials/testimonials.component'
import { Testimonial } from './testimonials/testimonial.interface'

/**
 * Home Component
 *
 * @exports
 * @class
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    OurActionsComponent,
    KnowMoreComponent,
    NewsComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    CommonModule,
    RouterLink,
    TestimonialsComponent,
  ],
})
export class HomeComponent implements OnInit {
  public testimonials: Testimonial[] = [
    {
      id: 1,
      author: 'Joana',
      position: 'Voluntária',
      text: 'Todos os sábados é uma aventura nova! Adoro!',
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

  public actions: Action[] = [
    {
      id: 1,
      title: 'Festa de aniversário',
      subtitle: 'Oferecido diariamente',
      price: 80,
    },
    {
      id: 2,
      title: 'Eventos de familia',
      subtitle: 'Oferecido diariamente',
      price: 80,
    },
    {
      id: 3,
      title: 'Eventos de empresa',
      subtitle: 'Oferecido diariamente',
      price: 80,
    },
    {
      id: 4,
      title: 'Eventos de trailing',
      subtitle: 'Oferecido diariamente',
      price: 80,
    },
  ]

  public lastNews!: Observable<News[]>

  /**
   * Creates an instance of HomeComponent
   *
   * @param {MatDialog} matDialog
   *
   * @memberof HomeComponent
   */
  constructor(
    private readonly matDialog: MatDialog,
    private readonly newsService: NewsService,
    private readonly coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getLastNews()
  }

  /**
   * When this function is triggered, a modal will appear with ScheduleActionComponent content
   *
   * @return {void}
   *
   * @memberof HomeComponent
   */
  public openDialog(): void {
    this.matDialog.open(ScheduleActionComponent, {
      width: '50%',
    })
  }

  public scrollTo(el: HTMLElement) {
    el.scrollIntoView()
  }

  private getLastNews(): void {
    this.lastNews = this.newsService.getLastNews(0).pipe(
      map((res: any) => {
        res.forEach((value: any) => {
          this.coreService
            .fileExists(`assets/images/news/news_${value.id}.jpg`)
            .subscribe((res_slide: any) => {
              if (res_slide) {
                value = { ...value, image: res_slide }
              }
            })
        })

        return res
      })
    )
  }
}

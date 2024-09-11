/*
 * File: list-trails.component.ts
 * Project: Cavalum
 * Created: Saturday, 7th September 2024 7:58:21 pm
 * Last Modified: Wednesday, 11th September 2024 2:58:32 pm
 * Copyright © 2024 Vitor Leal
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ModalBgComponent } from '../../../core/components/modal-bg/modal-bg.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common'
import { Trail } from 'src/app/core/interfaces/trail.interface'
import { Observable } from 'rxjs'
import { TrailsService } from '../trails.service'
import { RouterLink } from '@angular/router'

/**
 * List Trails Component
 *
 * @exports
 * @class
 */
@Component({
  selector: 'app-list-trails',
  templateUrl: './list-trails.component.html',
  styleUrls: ['./list-trails.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ModalBgComponent,
    MatCardModule,
    MatButtonModule,
    RouterLink,
  ],
})
export class ListTrailsComponent implements OnInit {
  public is_modal_open: boolean = false
  public trails!: Observable<Trail[]>

  constructor(private readonly trailsService: TrailsService) {}

  ngOnInit() {
    this.getAllTrails()
  }

  public getAllTrails(): void {
    this.trails = this.trailsService.getAllTrails()
  }

  /**
   *
   * @param modalBgStatus
   */
  public setModalBgStatus(modalBgStatus: any) {
    this.is_modal_open = modalBgStatus
  }
}

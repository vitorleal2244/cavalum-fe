/*
 * File: schedule-action.service.ts
 * Project: Cavalum
 * Created: Tuesday, 10th September 2024 10:10:05 pm
 * Last Modified: Wednesday, 11th September 2024 12:04:42 pm
 * Copyright © 2024 Vitor Leal
 */

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { ScheduleAction } from './schedule-action.interface'
import { Observable } from 'rxjs'

/**
 * Schedule Action Service
 *
 * @exports
 * @class
 */
@Injectable({
  providedIn: 'root',
})
export class ScheduleActionService {
  private readonly API_URL: string = environment.api.url

  /**
   * Creates an instance of ScheduleActionService
   *
   * @param {HttpClient} http
   *
   * @memberof ScheduleActionService
   */
  constructor(private readonly http: HttpClient) {}

  /**
   * Sends form information to register in db
   *
   * @param {ScheduleAction} scheduleAction
   * @returns
   *
   * @memberof ScheduleActionService
   */
  registerScheduleAction(
    scheduleAction: ScheduleAction
  ): Observable<ScheduleAction> {
    return this.http.post<ScheduleAction>(
      this.API_URL + '/schedule',
      scheduleAction
    )
  }
}

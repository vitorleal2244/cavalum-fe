import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map, Observable, of } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({ providedIn: 'root' })
export class CoreService {
  private readonly DOMAIN: string = environment.domain

  constructor(private readonly http: HttpClient) {}

  public fileExists(url: string): Observable<string | boolean> {
    return this.http
      .get(url, { observe: 'response', responseType: 'blob' })
      .pipe(
        map((response) => {
          return this.DOMAIN + '/' + url
        }),
        catchError((error) => {
          return of(false)
        })
      )
  }
}

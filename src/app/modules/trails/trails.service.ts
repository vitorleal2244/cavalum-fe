import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Trail } from 'src/app/modules/trails/trail.interface'
import { environment } from 'src/environments/environment'

@Injectable({ providedIn: 'root' })
export class TrailsService {
  public trails!: Trail[]
  private API_URL = environment.api.url

  constructor(private readonly http: HttpClient) {}

  public getAllTrails(): Observable<Trail[]> {
    return this.http.get<Trail[]>(this.API_URL + '/trails')
  }

  public getTrailById(id: number): Observable<Trail> {
    return this.http.get<Trail>(this.API_URL + '/trails/' + id)
  }
}

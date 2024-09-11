import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Trail } from 'src/app/core/interfaces/trail.interface'

@Injectable({ providedIn: 'root' })
export class TrailsService {
  constructor(private readonly http: HttpClient) {}

  public trails: Trail[] = [
    {
      id: 1,
      title: 'Trilho do Cavalum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../../assets/images/gallery/img3.JPG',
    },
    {
      id: 2,
      title: 'Trilho de Santa Marta',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../../assets/images/gallery/img2.JPG',
    },
  ]

  public getAllTrails(): Observable<Trail[]> {
    return of(this.trails)
  }

  public getTrailById(id: number): Observable<Trail> {
    return of({
      id: 2,
      title: 'Trilho de Santa Marta',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../../assets/images/gallery/img2.JPG',
    })
  }
}

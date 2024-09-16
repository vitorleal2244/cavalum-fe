import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { NewsList } from './news-list/news-list.interface'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class NewsService {
  private API_URL = environment.api.url

  constructor(private http: HttpClient) {}

  public getNews(): Observable<NewsList[]> {
    return this.http.get<NewsList[]>(this.API_URL + '/news')
  }
}

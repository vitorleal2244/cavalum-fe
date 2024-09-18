import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { LastNews, News } from './news.interface'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class NewsService {
  private API_URL = environment.api.url

  constructor(private http: HttpClient) {}

  public getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.API_URL + '/news')
  }

  public getNewsById(id: number): Observable<News> {
    return this.http.get<News>(this.API_URL + '/news/' + id)
  }

  public getLastNews(id: number): Observable<LastNews[]> {
    return this.http.get<LastNews[]>(this.API_URL + '/news/last_news/' + id)
  }
}

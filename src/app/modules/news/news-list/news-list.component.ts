import { Component, OnInit } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { NewsService } from '../news.service'
import { NewsList } from './news-list.interface'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-news',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  imports: [MatCardModule, CommonModule],
  standalone: true,
})
export class NewsListComponent implements OnInit {
  public news!: Observable<NewsList[]>

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews()
  }

  public getNews(): void {
    this.news = this.newsService.getNews()
  }
}

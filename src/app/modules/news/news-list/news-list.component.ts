import { Component, OnInit } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { NewsService } from '../news.service'
import { News } from '../news.interface'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-news',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  imports: [MatCardModule, CommonModule, RouterLink],
  standalone: true,
})
export class NewsListComponent implements OnInit {
  public news!: Observable<News[]>

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews()
  }

  public getNews(): void {
    this.news = this.newsService.getNews()
  }
}

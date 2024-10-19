import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { RouterLink } from '@angular/router'
import { Observable } from 'rxjs'
import { News } from '../../news/news.interface'

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss'],
  standalone: true,
  imports: [MatCardModule, RouterLink, CommonModule],
})
export class LastNewsComponent {
  @Input() lastNews!: Observable<News[]>
}

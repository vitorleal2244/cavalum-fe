import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import { NewsService } from '../news.service'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { News, LastNews } from '../news.interface'
import { Safe } from 'src/app/core/pipes/safe-html.pipe'
import { CoreService } from 'src/app/core/services/core.service'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  imports: [CommonModule, Safe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NewsDetailComponent implements OnInit {
  public newsID!: string | null
  public currentImage!: string
  public newsDetail!: News
  public lastNews!: Observable<LastNews[]>

  constructor(
    private readonly activedRoute: ActivatedRoute,
    private readonly newsService: NewsService,
    private readonly coreService: CoreService,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.onChangeNews()
  }

  public changeImage(imageName: string) {
    this.currentImage = imageName
  }

  public onChangeNews(id?: number): void {
    this.newsID = !id
      ? this.activedRoute.snapshot.paramMap.get('id')
      : id.toString()
    this.getNewsDetail()
    this.getLastNews()
    this.changeDetector.detectChanges()
  }

  private getNewsDetail(): void {
    if (this.newsID && parseInt(this.newsID)) {
      this.newsService
        .getNewsById(parseInt(this.newsID))
        .subscribe((res: News) => {
          this.newsDetail = res

          this.coreService
            .fileExists(`assets/images/news/news_${this.newsID}.jpg`)
            .subscribe((res_slide: any) => {
              if (res_slide) {
                this.currentImage = res_slide
                this.changeDetector.detectChanges()
              }
            })
        })
    }
  }

  private getLastNews(): void {
    if (this.newsID && parseInt(this.newsID)) {
      this.lastNews = this.newsService.getLastNews(parseInt(this.newsID)).pipe(
        map((res: any) => {
          res.forEach((value: any) => {
            this.coreService
              .fileExists(`assets/images/news/news_${value.id}.jpg`)
              .subscribe((res_slide: any) => {
                if (res_slide) {
                  value = { ...value, image: res_slide }
                }
              })
          })

          return res
        })
      )
    }
  }
}

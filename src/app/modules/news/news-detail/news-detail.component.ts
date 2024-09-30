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
import { CoreService } from 'src/app/core/services/core.service'
import { map, Observable } from 'rxjs'
import { Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  imports: [CommonModule, RouterLink],
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
    private readonly changeDetector: ChangeDetectorRef,
    private metaService: Meta
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

  public shareOnInstagram(): boolean {
    window.open(
      'https://instagram.com/accounts/login/?text=%20Check%20up%20this%20awesome%20content' +
        encodeURIComponent(document.title) +
        ':%20 ' +
        encodeURIComponent(
          'http://localhost:4200/news/' + this.newsID + this.newsDetail.title
        )
    )
    return false
  }

  public shareOnFacebook(): boolean {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' +
        encodeURIComponent(
          'http://localhost:4200/news/' + this.newsID + this.newsDetail.title
        )
    )
    return false
  }

  private getNewsDetail(): void {
    if (this.newsID && parseInt(this.newsID)) {
      this.newsService
        .getNewsById(parseInt(this.newsID))
        .pipe(
          map((res) => {
            // Verify if image exists
            this.coreService
              .fileExists(`assets/images/news/news_${this.newsID}.jpg`)
              .subscribe((res_slide: any) => {
                if (res_slide) {
                  this.currentImage = res_slide
                  this.changeDetector.detectChanges()
                }
              })

            // Get all the tags
            let splitted_string = res.description.split('#')
            res.description = splitted_string[0]
            res = { ...res, tags: splitted_string.splice(1) }

            return res
          })
        )
        .subscribe((res: News) => {
          this.newsDetail = res

          // Set metatags
          this.coreService.setMetaTags(
            this.newsDetail.title,
            this.newsDetail.subtitle,
            '',
            'news/' + this.newsID,
            this.currentImage,
            'news/' + this.newsID
          )

          console.log(this.metaService.getTag("name='title'"))
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

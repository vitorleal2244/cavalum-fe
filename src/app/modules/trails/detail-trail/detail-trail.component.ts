import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgIterable,
  OnInit,
} from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Trail } from 'src/app/modules/trails/trail.interface'
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { TrailsService } from '../trails.service'
import { CommonModule } from '@angular/common'
import { CoreService } from 'src/app/core/services/core.service'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'app-detail-trail',
  templateUrl: './detail-trail.component.html',
  styleUrls: ['./detail-trail.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    CommonModule,
    RouterLink,
  ],
})
export class DetailTrailComponent implements OnInit {
  public trailId!: string | null
  public trailInfo$!: Observable<Trail>
  public commentsVisible: boolean = false
  public currentImage!: string

  constructor(
    private readonly trailsService: TrailsService,
    private readonly activedRoute: ActivatedRoute,
    private readonly coreService: CoreService,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.trailId = this.activedRoute.snapshot.paramMap.get('id')

    if (this.trailId && parseInt(this.trailId)) {
      this.trailInfo$ = this.trailsService
        .getTrailById(parseInt(this.trailId))
        .pipe(
          map((res: any) => {
            this.coreService
              .fileExists(`assets/images/trails/trail_${res.id}.jpg`)
              .subscribe((res_slide: any) => {
                if (res_slide) {
                  this.currentImage = res_slide
                  this.changeDetector.detectChanges()
                }
              })

            if (res.tags) {
              let splitted_tags = res.tags.split('_')

              res = { ...res, tags: splitted_tags }
            }

            return res
          })
        )
    }
  }
}

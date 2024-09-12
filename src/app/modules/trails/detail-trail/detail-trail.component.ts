import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Trail } from 'src/app/core/interfaces/trail.interface'
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { TrailsService } from '../trails.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-detail-trail',
  templateUrl: './detail-trail.component.html',
  styleUrls: ['./detail-trail.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    CommonModule,
  ],
})
export class DetailTrailComponent implements OnInit {
  public trailId!: string | null
  public trailInfo!: Trail
  public commentsVisible: boolean = false;

  constructor(
    private readonly trailsService: TrailsService,
    private readonly activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.trailId = this.activedRoute.snapshot.paramMap.get('id')

    if (this.trailId && parseInt(this.trailId)) {
      this.trailsService
        .getTrailById(parseInt(this.trailId))
        .subscribe((res: Trail) => {
          this.trailInfo = res
        })
    }
  }
}

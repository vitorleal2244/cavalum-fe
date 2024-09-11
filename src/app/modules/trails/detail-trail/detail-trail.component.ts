import { Component, OnInit } from '@angular/core'
import { TrailsService } from '../trails.service'
import { HttpParams } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import { Trail } from 'src/app/core/interfaces/trail.interface'

@Component({
  selector: 'app-detail-trail',
  templateUrl: './detail-trail.component.html',
  styleUrls: ['./detail-trail.component.scss'],
  standalone: true,
})
export class DetailTrailComponent implements OnInit {
  public trailId!: string | null
  public trailInfo!: Trail

  constructor(
    private readonly trailsService: TrailsService,
    private readonly activedRoute: ActivatedRoute
  ) {}

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

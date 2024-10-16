/*
 * File: tab-bar.component.ts
 * Project: Cavalum
 * Created: Saturday, 7th September 2024 7:58:21 pm
 * Last Modified: Wednesday, 9th October 2024 1:12:58 pm
 * Copyright © 2024 Vitor Leal
 */

import { CommonModule } from '@angular/common'
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router'
import { filter, map } from 'rxjs'

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, CommonModule],
})
export class TabBarComponent {
  @ViewChild('stickyMenu') menuElement!: ElementRef

  public sticky: boolean = false
  public elementPosition: any
  public isHome: boolean = false

  constructor(
    private readonly router: Router,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.checkIsHome()
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.scrollY
    if (windowScroll > this.elementPosition) {
      this.sticky = true
    } else {
      this.sticky = false
    }
  }

  private checkIsHome() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((response: any) => {
        console.log(response)
        if (response.url === '/home' || response.url === '/') {
          this.isHome = true
        } else {
          this.isHome = false
        }
      })
  }
}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent {
  navFixed: boolean = false;
  private scrollOffset: number = 70;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.scrollY
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }
}

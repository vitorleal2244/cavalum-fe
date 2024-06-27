import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-man-child',
    templateUrl: './svg_man_child.component.svg',
    styleUrls: [],
    standalone: true
})
export class SvgManChildComponent {
  @Input() size: string;

  fillColor: string = '#14A808';

  constructor() {
    this.size = '100%';
  }
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-map',
    templateUrl: './svg_map.component.svg',
    styleUrls: [],
    standalone: true
})
export class SvgMapComponent {
  @Input() size: string;

  fillColor: string = '#14A808';

  constructor() {
    this.size = '100%';
  }
}

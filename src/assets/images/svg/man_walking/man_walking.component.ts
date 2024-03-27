import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-man-walking-svg',
  templateUrl: './man_walking.component.svg',
  styleUrls: []
})
export class ManWalkingComponent {
  @Input() size: string;

  fillColor: string = '#14A808';

  constructor() {
    this.size = '100%';
  }
}

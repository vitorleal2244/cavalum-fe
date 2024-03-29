import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-footer-instragram',
  templateUrl: './svg_footer_instragram.component.svg',
  styleUrls: []
})
export class SvgFooterInstragramComponent {
  @Input() size: string;

  fillColor: string = '#14A808';

  constructor() {
    this.size = '100%';
  }
}

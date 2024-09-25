import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-footer-facebook',
  templateUrl: './svg_footer_facebook.component.svg',
  styleUrls: []
})
export class SvgFooterFacebookComponent {
  @Input() size: string;

  fillColor: string = '#14A808';

  constructor() {
    this.size = '100%';
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: string;
  @Input() text: string;
  @Input() class: string;
  @Input() link: string;
  @Input() change_page: string;

  constructor() {
    this.type = 'button';
    this.text = 'Saber mais';
    this.class = 'primary';
    this.link = '';
    this.change_page = '';
  }
}

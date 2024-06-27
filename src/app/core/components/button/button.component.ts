import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class ButtonComponent {
  @Input() type: string;
  @Input() text: string;
  @Input() class: string;
  @Input() link: string;
  @Input() change_page: string;
  @Input() description: string;

  constructor() {
    this.type = 'button';
    this.text = 'Saber mais';
    this.class = 'primary';
    this.link = '';
    this.change_page = '';
    this.description = '';
  }
}

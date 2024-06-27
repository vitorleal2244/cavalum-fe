import { Component, Input } from '@angular/core';
import { NgClass, NgStyle, NgIf } from '@angular/common';

@Component({
    selector: 'app-image-text',
    templateUrl: './image-text.component.html',
    styleUrls: ['./image-text.component.scss'],
    standalone: true,
    imports: [NgClass, NgStyle, NgIf]
})
export class ImageTextComponent {
  @Input() text_side: string = 'left';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';

  constructor() {}
}

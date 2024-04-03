import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss']
})
export class ImageTextComponent {
  @Input() text_side: string = 'left';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';

  constructor() {}
}

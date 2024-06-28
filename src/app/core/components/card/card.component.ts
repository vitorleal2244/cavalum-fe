import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [ButtonComponent, CommonModule],
})
export class CardComponent {
  @Input({ required: true }) title: string = '';
  @Input() button_text: string = '';
  @Input() image: string = '';
  @Input() link: string = '';

  constructor(private _route: Router) {}

  public goToLink() {
    this._route.navigateByUrl(this.link);
  }
}

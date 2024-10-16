import { Component, EventEmitter, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  standalone: true,
  imports: [MatButtonModule],
})
export class SliderComponent {
  @Output() clickSlider = new EventEmitter()

  public scrollToEmitter() {
    this.clickSlider.emit()
  }
}

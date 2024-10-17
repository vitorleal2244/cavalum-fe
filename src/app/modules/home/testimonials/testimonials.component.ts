import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { Testimonial } from './testimonial.interface'

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule],
})
export class TestimonialsComponent {
  private _testimonials!: Testimonial[]

  @Input()
  public get testimonials(): Testimonial[] {
    return this._testimonials
  }

  public set testimonials(value: Testimonial[]) {
    this._testimonials = value
  }
}

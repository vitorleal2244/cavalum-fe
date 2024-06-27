import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/core/interfaces/testimonial';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.scss'],
    standalone: true,
    imports: [NgFor, NgClass]
})
export class TestimonialComponent {
  @Input() testimonials: Array<Testimonial> = [];

  public active_testimonial: number = 1;

  private testimonials_ids: Array<number> = [];
  private last_position_array: number = 0;
  private ids_interval = setInterval(() => {}, 4000);

  constructor() {}

  ngOnInit() {
    this.active_testimonial = this.testimonials[0].id;

    this.getIds();
    this.changeId();
  }

  private getIds(): void {
    this.testimonials.forEach((testimonial) => {
      this.testimonials_ids.push(testimonial.id);
    });
  }

  private changeId(): void {
    const self = this;

    this.ids_interval = setInterval(function () {
      if (
        self.active_testimonial === self.testimonials_ids[self.testimonials_ids.length - 1]
      ) {
        self.active_testimonial = self.testimonials[0].id;
        self.last_position_array = 0;
      } else {
        self.last_position_array++;
        self.active_testimonial = self.testimonials_ids[self.last_position_array];
      }

    }, 4000);
  }

  public onChangeTestimonialHandler(id: number): void {
    this.active_testimonial = id;
    this.last_position_array = this.testimonials_ids.indexOf(id);
    clearInterval(this.ids_interval);
    setTimeout(() => {
      this.changeId();
    }, 6000);
  }
}

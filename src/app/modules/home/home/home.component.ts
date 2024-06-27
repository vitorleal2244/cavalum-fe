import { Component } from '@angular/core';
import { NewsComponent } from '../../../core/components/news/news.component';
import { TestimonialComponent } from '../../../core/components/testimonial/testimonial.component';
import { SvgMapComponent } from '../../../../assets/images/svg/map/svg_map.component';
import { SvgManChildComponent } from '../../../../assets/images/svg/man_child/svg_man_child.component';
import { SvgMedicalCaseComponent } from '../../../../assets/images/svg/medical_case/svg_medical_case.component';
import { ManWalkingComponent } from '../../../../assets/images/svg/man_walking/man_walking.component';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { SliderComponent } from '../../../core/components/slider/slider.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        SliderComponent,
        ButtonComponent,
        ManWalkingComponent,
        SvgMedicalCaseComponent,
        SvgManChildComponent,
        SvgMapComponent,
        TestimonialComponent,
        NewsComponent,
    ],
})
export class HomeComponent {
  testimonials = [
    {
      id: 1,
      author: 'Carla',
      text: 'Sou um depoimento. Clique aqui para adicionar um texto que diga algo bom sobre você e sua experiência como voluntário da Cavalum.',
    },
    {
      id: 2,
      author: 'Thyago',
      text: 'Gosto muito de ir ao Cavalum!',
    },
    {
      id: 3,
      author: 'José',
      text: 'O Cavalum foi a minha melhor experiência de sempre!!',
    },
  ];
}

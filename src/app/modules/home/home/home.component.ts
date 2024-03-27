import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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

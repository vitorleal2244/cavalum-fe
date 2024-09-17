import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsSliderImages } from '../news-slider-images.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class NewsDetailComponent implements OnInit {
  public currentImage!: string;
  public sliderImages!: NewsSliderImages[];

  constructor(
    private readonly newsService: NewsService
  ) { }

  ngOnInit() {
    this.currentImage = 'news_5.jpg';

    this.sliderImages = [
      {
        id: 1,
        name: 'news_5.jpg'
      },
      {
        id: 2,
        name: 'news_2.jpg'
      },
      {
        id: 3,
        name: 'news_3.jpg'
      },
    ]
  }

  changeImage(imageName: string) {
    this.currentImage = imageName;
  }
}

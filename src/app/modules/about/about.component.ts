import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public imageViewer: string = '';

  photos = [
    '../../../assets/images/gallery/img1.jpg',
    '../../../assets/images/gallery/img2.JPG',
    '../../../assets/images/gallery/img3.JPG',
    '../../../assets/images/gallery/img4.jpg',
    '../../../assets/images/gallery/img6.jpg',
    '../../../assets/images/gallery/img7.jpg',
    '../../../assets/images/gallery/img8.jpg',
    '../../../assets/images/gallery/img9.jpg',
  ];

  public getPhoto(photo: any): void {
    this.imageViewer = photo;
  }

  public closeImageViewer(isClosed: any) {
    if (isClosed) {
      this.imageViewer = '';
    }
  }
}

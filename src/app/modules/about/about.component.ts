import { Component } from '@angular/core';
import { GalleryComponent } from '../../core/components/gallery/gallery.component';
import { ImageTextComponent } from '../../core/components/image-text/image-text.component';
import { ImageViewerComponent } from '../../core/components/image-viewer/image-viewer.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true,
    imports: [NgIf, ImageViewerComponent, ImageTextComponent, GalleryComponent]
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

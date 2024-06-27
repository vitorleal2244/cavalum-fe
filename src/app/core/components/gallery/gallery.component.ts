import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class GalleryComponent {
  @Input({ required: true }) photos: string[] = [];
  @Output() photoClick = new EventEmitter<string>();

  public photos_section_1: string[] = [];
  public photos_section_2: string[] = [];
  public photos_section_3: string[] = [];
  public photos_section_4: string[] = [];

  public imageViewer: string = '';

  constructor() {}

  ngOnInit() {
    this.distributePhotos();
  }

  private distributePhotos(): void {
    let position = 1;

    this.photos.forEach((photo) => {
      if (position === 1) {
        this.photos_section_1.push(photo);
        position++;
      } else if (position === 2) {
        this.photos_section_2.push(photo);
        position++;
      } else if (position === 3) {
        this.photos_section_3.push(photo);
        position++;
      } else {
        this.photos_section_4.push(photo);
        position = 1;
      }
    });
  }

  public onPhotoClickHandler(photo: string): void {
    this.photoClick.emit(photo);
  }
}

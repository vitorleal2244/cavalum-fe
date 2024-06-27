import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.scss'],
    standalone: true
})
export class ImageViewerComponent {
  @Input({ required: true }) image: string = '';
  @Output() closeViewer = new EventEmitter<boolean>();

  ngOnInit(): void {}

  public closeViewerHandler(): void {
    this.closeViewer.emit(true);
  }
}

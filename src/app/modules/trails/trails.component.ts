import { Component } from '@angular/core';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss']
})
export class TrailsComponent {
  public is_modal_open: boolean = false;

  public setModalBgStatus(modalBgStatus: any) {
    this.is_modal_open = modalBgStatus;
  }
}

import { Component } from '@angular/core';
import { CardComponent } from '../../../core/components/card/card.component';
import { ModalBgComponent } from '../../../core/components/modal-bg/modal-bg.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-list-trails',
    templateUrl: './list-trails.component.html',
    styleUrls: ['./list-trails.component.scss'],
    standalone: true,
    imports: [NgIf, ModalBgComponent, CardComponent]
})
export class ListTrailsComponent {
  public is_modal_open: boolean = false;

  public setModalBgStatus(modalBgStatus: any) {
    this.is_modal_open = modalBgStatus;
  }
}

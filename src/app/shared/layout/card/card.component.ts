import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ScheduleComponent } from 'src/app/modals/schedule/schedule.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({ required: true }) title: string = '';
  @Input() button_text: string = '';
  @Input() image: string = '';
  @Output() modal_bg_open = new EventEmitter<boolean>();

  modalRef: MdbModalRef<ScheduleComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ScheduleComponent);
    this.modal_bg_open.emit(true);
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
      this.modal_bg_open.emit(false);
    });
  }
}

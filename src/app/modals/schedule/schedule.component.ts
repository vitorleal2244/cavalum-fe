import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
    standalone: true
})
export class ScheduleComponent {
  constructor(public modalRef: MdbModalRef<ScheduleComponent>) {}
}

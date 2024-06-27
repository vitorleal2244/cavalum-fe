import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-medical-case',
    templateUrl: './svg_medical_case.component.svg',
    styleUrls: [],
    standalone: true
})
export class SvgMedicalCaseComponent {
  @Input() size: string;

  fillColor: string = '#14A808';

  constructor() {
    this.size = '100%';
  }
}

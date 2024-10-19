import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { SvgManChildComponent } from '../../../../assets/images/svg/man_child/svg_man_child.component'
import { ManWalkingComponent } from '../../../../assets/images/svg/man_walking/man_walking.component'
import { SvgMapComponent } from '../../../../assets/images/svg/map/svg_map.component'
import { SvgMedicalCaseComponent } from '../../../../assets/images/svg/medical_case/svg_medical_case.component'

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['know-more.component.scss'],
  standalone: true,
  imports: [
    ManWalkingComponent,
    SvgMedicalCaseComponent,
    SvgManChildComponent,
    SvgMapComponent,
    MatButtonModule,
  ],
})
export class KnowMoreComponent {}

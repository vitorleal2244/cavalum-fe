import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/components/button/button.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: true,
    imports: [ButtonComponent]
})
export class ContactComponent {

}

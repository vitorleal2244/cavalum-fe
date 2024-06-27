import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class FooterComponent {
  public website_name = environment.geral.name;
  public present_year = new Date().getFullYear();
}

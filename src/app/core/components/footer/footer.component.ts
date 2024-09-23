/*
 * File: footer.component.ts
 * Project: Cavalum
 * Created: Saturday, 7th September 2024 7:58:21 pm
 * Last Modified: Monday, 23rd September 2024 11:44:58 am
 * Copyright © 2024 Vitor Leal
 */

import { Component } from '@angular/core'
import { environment } from 'src/environments/environment'
import { TranslateModule } from '@ngx-translate/core'

/**
 * Footer component
 *
 * @class
 * @exports
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule],
})
export class FooterComponent {
  public website_name = environment.geral.name
  public present_year = new Date().getFullYear()
}

import { Component } from '@angular/core'
import { MatIcon, MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
})
export class TabBarComponent {}

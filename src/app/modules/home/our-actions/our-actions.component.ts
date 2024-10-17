import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Action } from './action.interface'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-our-actions',
  templateUrl: './our-actions.component.html',
  styleUrls: ['our-actions.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class OurActionsComponent {
  @Output() openDialogHandler = new EventEmitter()

  private _actions!: Action[]

  @Input()
  public get actions(): Action[] {
    return this._actions
  }

  public set actions(value: Action[]) {
    this._actions = value
  }

  public openDialogEmitter() {
    this.openDialogHandler.emit()
  }
}

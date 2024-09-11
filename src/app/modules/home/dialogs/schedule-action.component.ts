import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { Errors } from 'src/app/core/interfaces/errors.interface'
import { CommonModule } from '@angular/common'
import { ScheduleActionService } from './schedule-action.service'

/**
 * Schedule Action Dialog Component
 */
@Component({
  selector: 'app-schedule-action',
  templateUrl: 'schedule-action.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class ScheduleActionComponent implements OnInit {
  public scheduleForm!: FormGroup
  public sentForm$!: Observable<boolean>
  public errors$!: Observable<Errors[]>

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private scheduleActionService: ScheduleActionService
  ) {}

  ngOnInit() {
    this.sentForm$ = of(false)

    this.scheduleForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
    })
  }

  public onSubmit(): void {
    try {
      if (this.scheduleForm.valid) {
        this.scheduleActionService
          .registerScheduleAction(this.scheduleForm.value)
          .subscribe((res: any) => {
            if (res.status === 200) {
              this.sentForm$ = of(true)
              this.errors$ = of([])
              this.cd.detectChanges()
            } else {
              this.sentForm$ = of(false)
              this.errors$ = of([
                {
                  message: 'Já fez um pedido de agendamento com esse email!',
                },
              ])
              this.cd.detectChanges()
            }
          })
      }
    } catch (error) {
      console.error(error)
    }
  }
}

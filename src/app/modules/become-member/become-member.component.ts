/*
 * File: become-member.component.ts
 * Project: Cavalum
 * Created: Saturday, 7th September 2024 10:46:01 pm
 * Last Modified: Saturday, 7th September 2024 11:08:26 pm
 * Copyright © 2024 Vitor Leal
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormGroup } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common'
import { BecomeMemberService } from './become-member.service'
import { Errors } from 'src/app/core/interfaces/errors.interface'
import { Observable, of } from 'rxjs'

/**
 * Become a Member Component
 *
 * @exports
 * @class
 */
@Component({
  selector: 'app-become-member',
  templateUrl: './become-member.component.html',
  styleUrls: ['./become-member.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BecomeMemberComponent implements OnInit {
  public becomeMemberForm!: FormGroup
  public sentForm$!: Observable<boolean>
  public errors$!: Observable<Errors[]>

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private becomeMemberService: BecomeMemberService
  ) {}

  ngOnInit() {
    this.sentForm$ = of(false)

    this.becomeMemberForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: [
        '',
        [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
      ],
    })
  }

  /**
   * On submit going to save form values on db, if valid
   *
   * @return {void}
   * @memberof BecomeMemberComponent
   */
  public onSubmit(): void {
    try {
      if (this.becomeMemberForm.valid) {
        this.becomeMemberService
          .registerMember(this.becomeMemberForm.value)
          .subscribe((res: any) => {
            if (res.status === 200) {
              this.sentForm$ = of(true)
              this.errors$ = of([])
              this.cd.detectChanges()
            } else {
              this.sentForm$ = of(false)
              this.errors$ = of([
                {
                  message: 'Já fez uma inscrição com esse email!',
                },
              ])
              this.cd.detectChanges()
            }
          })
      } else {
        this.errors$ = of([
          {
            message: 'Preencha os campos obrigatórios!',
          },
        ])
      }
    } catch (error) {
      console.error(error)
    }
  }
}

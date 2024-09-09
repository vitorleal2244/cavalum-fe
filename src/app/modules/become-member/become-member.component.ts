/*
 * File: become-member.component.ts
 * Project: Cavalum
 * Created: Saturday, 7th September 2024 10:46:01 pm
 * Last Modified: Saturday, 7th September 2024 11:08:26 pm
 * Copyright © 2024 Vitor Leal
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormGroup } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common'
import { BecomeMemberService } from './become-member.service'

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

  constructor(
    private fb: FormBuilder,
    private becomeMemberService: BecomeMemberService
  ) {}

  ngOnInit() {
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

  public onSubmit(): void {
    try {
      if (this.becomeMemberForm.valid) {
        this.becomeMemberService
          .registerMember(this.becomeMemberForm.value)
          .subscribe((res) => {
            console.log(res)
          })
      }
    } catch (error) {
      console.error(error)
    }
  }
}

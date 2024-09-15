/*
 * File: contact.component.ts
 * Project: Cavalum
 * Created: Saturday, 7th September 2024 7:58:21 pm
 * Last Modified: Wednesday, 11th September 2024 12:13:42 pm
 * Copyright © 2024 Vitor Leal
 */

import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { ContactService } from './contact.service'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Observable, of } from 'rxjs'
import { Errors } from 'src/app/core/interfaces/errors.interface'
import { CommonModule } from '@angular/common'

/**
 * Contact Component
 *
 * @exports
 * @class
 * @implements {OnInit}
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule],
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup
  public sentForm$!: Observable<boolean>
  public errors$!: Observable<Errors[]>

  /**
   * Creates an instance of ContactComponent
   *
   * @param {FormBuilder} fb
   * @param {ChangeDetectorRef} cd
   * @param {ContactService} contactService
   *
   * @memberof ContactComponent
   */
  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private readonly contactService: ContactService
  ) {}

  /**
   * Initializes some variables and calls methods
   *
   * @memberof ContactComponent
   */
  ngOnInit() {
    this.sentForm$ = of(false)

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  /**
   * On submit going to save form values on db, if valid
   *
   * @return {void}
   *
   * @memberof ContactComponent
   */
  public onSubmit(): void {
    try {
      if (this.contactForm.valid) {
        this.contactService
          .registerContact(this.contactForm.value)
          .subscribe((res: any) => {
            if (res.status === 200) {
              this.sentForm$ = of(true)
              this.errors$ = of([])
              this.cd.detectChanges()
            } else {
              this.sentForm$ = of(false)
              this.errors$ = of([
                {
                  message: 'Já fez um contato com esse email!',
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

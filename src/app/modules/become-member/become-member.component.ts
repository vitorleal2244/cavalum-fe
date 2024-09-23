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
import { CoreService } from 'src/app/core/services/core.service'

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
    private becomeMemberService: BecomeMemberService,
    private readonly coreService: CoreService
  ) {}

  ngOnInit() {
    this.sentForm$ = of(false)

    this.becomeMemberForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: [
        '',
        [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
      ],
      birthDate: ['', Validators.required],
      address: ['', Validators.required],
      cp: ['', Validators.required],
      county: ['', Validators.required],
      district: ['', Validators.required],
      country: ['', Validators.required],
      nationality: ['', Validators.required],
      idNumber: ['', [Validators.minLength(0), Validators.maxLength(9)]],
      nif: ['', [Validators.minLength(0), Validators.maxLength(9)]],
      educationalQualifications: [''],
      job: [''],
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
              this.sendEmail().then(
                (response: any) => {
                  this.cd.detectChanges()
                },
                (error: Error) => {
                  console.error('Email not sent')
                }
              )
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

  private async sendEmail(): Promise<void> {
    var templateParamsToAdmin = {
      from_name: this.becomeMemberForm.value.firstName,
      from_email: this.becomeMemberForm.value.email,
      to_name: 'Cavalum',
      to_email: 'vitorandreleal@hotmail.com',
      subject: 'Pedido de adesão para membro',
      message:
        'Um novo utilizador fez um pedido de adesão para membro Cavalum. Abaixo encontra-se as informações dadas pelo mesmo.\n\n ' +
        'Nome: ' +
        this.becomeMemberForm.value.name +
        '\n Email: ' +
        this.becomeMemberForm.value.email +
        '\n Contacto: ' +
        this.becomeMemberForm.value.contact +
        '\n Data de nascimento: ' +
        this.becomeMemberForm.value.birthDate +
        '\n Morada: ' +
        this.becomeMemberForm.value.address +
        '\n Código-Postal: ' +
        this.becomeMemberForm.value.cp +
        '\n Concelho: ' +
        this.becomeMemberForm.value.county +
        '\n Distrito: ' +
        this.becomeMemberForm.value.district +
        '\n País: ' +
        this.becomeMemberForm.value.country +
        '\n Nacionalidade: ' +
        this.becomeMemberForm.value.nationality +
        '\n Nº BI/CC/Passaporte: ' +
        this.becomeMemberForm.value.idNumber +
        '\n NIF: ' +
        this.becomeMemberForm.value.nif +
        '\n Qualificações literárias: ' +
        this.becomeMemberForm.value.educationalQualifications +
        '\n Profissão: ' +
        this.becomeMemberForm.value.job +
        '\n\n O utilizador encontra-se no estado pendente de aprovação.',
    }

    this.coreService.sendEmail(templateParamsToAdmin)
  }
}

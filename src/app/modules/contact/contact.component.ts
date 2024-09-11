import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { ButtonComponent } from '../../core/components/button/button.component'
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

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup
  public sentForm$!: Observable<boolean>
  public errors$!: Observable<Errors[]>

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private readonly contactService: ContactService
  ) {}

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
      }
    } catch (error) {
      console.error(error)
    }
  }
}

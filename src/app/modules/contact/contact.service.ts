import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Contact } from './contact.interface'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ContactService {
  private API_URL: string = environment.api.url

  constructor(private readonly http: HttpClient) {}

  registerContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.API_URL + '/contact', contact)
  }
}

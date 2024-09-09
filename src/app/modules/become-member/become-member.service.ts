import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BecomeMember } from './becomer-member.interface'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class BecomeMemberService {
  private API_URL: string = environment.api.url

  constructor(private http: HttpClient) {}

  registerMember(becomeMember: BecomeMember): Observable<BecomeMember> {
    return this.http.post<BecomeMember>(this.API_URL + '/member', becomeMember)
  }
}

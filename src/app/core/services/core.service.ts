import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map, Observable, of } from 'rxjs'
import { environment } from 'src/environments/environment'
import { send, init, EmailJSResponseStatus } from '@emailjs/browser'

@Injectable({ providedIn: 'root' })
export class CoreService {
  private readonly DOMAIN: string = environment.domain
  private readonly PUBLIC_KEY: string = environment.email.public_key

  constructor(private readonly http: HttpClient) {
    this.initEmailService()
  }

  public fileExists(url: string): Observable<string | boolean> {
    return this.http
      .get(url, { observe: 'response', responseType: 'blob' })
      .pipe(
        map((response) => {
          return this.DOMAIN + '/' + url
        }),
        catchError((error) => {
          return of(false)
        })
      )
  }

  public async sendEmail(templateParams: any): Promise<EmailJSResponseStatus> {
    return await send('service_gz4orr9', 'template_cpq90pf', templateParams)
  }

  private initEmailService(): void {
    init({
      publicKey: this.PUBLIC_KEY,
      blockHeadless: true,
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    })
  }
}

import { HttpClient } from '@angular/common/http'
import { ChangeDetectorRef, Inject, Injectable } from '@angular/core'
import { catchError, map, Observable, of } from 'rxjs'
import { environment } from 'src/environments/environment'
import { send, init, EmailJSResponseStatus } from '@emailjs/browser'
import { Meta } from '@angular/platform-browser'
import { DOCUMENT } from '@angular/common'

@Injectable({ providedIn: 'root' })
export class CoreService {
  private readonly DOMAIN: string = environment.domain
  private readonly PUBLIC_KEY: string = environment.email.public_key
  private canonicalLink!: HTMLLinkElement

  constructor(
    private readonly http: HttpClient,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
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

  public setMetaTags(
    title: string = '',
    description: string = '',
    keywords: string = '',
    url: string = '',
    image: string = '',
    canonical: string = ''
  ) {
    if (title) {
      this.metaService.updateTag({ name: 'title', content: title })
      this.metaService.updateTag({ property: 'og:title', content: title })
    }

    if (description) {
      this.metaService.updateTag({ name: 'description', content: description })
      this.metaService.updateTag({
        property: 'og:description',
        content: description,
      })
    }

    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords })
    }

    if (url) {
      this.metaService.updateTag({
        property: 'og:url',
        content: this.DOMAIN + '/' + url,
      })
    }

    if (image) {
      this.metaService.updateTag({ property: 'og:image', content: image })
    }

    if (canonical) {
      this.canonicalLink = this.document.createElement('link')
      this.canonicalLink.setAttribute('rel', 'canonical')
      this.canonicalLink.setAttribute('href', this.DOMAIN + '/' + canonical)
      this.document.head.append(this.canonicalLink)
    }
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

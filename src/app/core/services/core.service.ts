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

  private _titleTag = ''
  private _descriptionTag = ''
  private _keywordsTag = ''
  private _urlTag = ''
  private _imageTag = ''

  constructor(
    private readonly http: HttpClient,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.initEmailService()
  }

  public get titleTag() {
    return this._titleTag
  }

  public set titleTag(value: string) {
    this._titleTag = value
  }

  public get descriptionTag() {
    return this._descriptionTag
  }

  public set descriptionTag(value: string) {
    this._descriptionTag = value
  }

  public get keywordsTag() {
    return this._keywordsTag
  }

  public set keywordsTag(value: string) {
    this._keywordsTag = value
  }

  public get urlTag() {
    return this._urlTag
  }

  public set urlTag(value: string) {
    this._urlTag = value
  }

  public get imageTag() {
    return this._imageTag
  }

  public set imageTag(value: string) {
    this._imageTag = value
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

  public setMetaTags() {
    if (this.titleTag) {
      this.metaService.updateTag({ name: 'title', content: this.titleTag })
      this.metaService.updateTag({
        property: 'og:title',
        content: this.titleTag,
      })
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

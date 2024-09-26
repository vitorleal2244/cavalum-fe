import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http'
import { catchError, map, Observable } from 'rxjs'
import { LoadingService } from './core/services/loading.service'

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private readonly loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.setLoading(true, request.url)
    return next
      .handle(request)
      .pipe(
        catchError((err) => {
          this.loadingService.setLoading(false, request.url)
          return err
        })
      )
      .pipe(
        map((evt: any) => {
          if (evt instanceof HttpResponse) {
            this.loadingService.setLoading(false, request.url)
          }
          return evt
        })
      )
  }
}

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSpinner } from '@angular/material/progress-spinner';
import { HttpServiceResponseModel } from '../models/HttpServiceResponseModel';
import { CommonsService } from '../../shared/services/commons.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner'; 


@Injectable({
  providedIn: 'root',
})
export class HttpService implements HttpInterceptor {
  private totalRequests = 0;
  public isLoadingSubject = new BehaviorSubject<boolean>(false);
  private spinnerTopRef = this.cdkSpinnerCreate();
  spin$ = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient,
    private overlay: Overlay,
    private commonsService: CommonsService
  ) {
    this.spin$
      .asObservable()
      .pipe(
        map((val) => (val ? 1 : -1)),
        scan((acc, one) => (acc + one >= 0 ? acc + one : 0), 0)
      )
      .subscribe((res) => {
        if (res === 1) {
          this.showSpinner();
        } else if (res === 0 && this.spinnerTopRef.hasAttached()) {
          this.stopSpinner();
        }
      });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.addRequests();
    const sessionHeaders = this.createSessionHeaders();
    request = request.clone({ setHeaders: sessionHeaders });

    return new Observable<HttpEvent<any>>((observer) => {
      const subscription = next.handle(request).subscribe(
        {
          next: (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              this.decreaseRequests();
              observer.next(event);
            }
          },
          error: (error: any) => {
            this.decreaseRequests();
            this.commonsService.hide();
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          }
        }
      );
      return () => {
        subscription.unsubscribe();
      };
    });
  }

  private createSessionHeaders(): { [header: string]: string } {
    const get = (key: string) => atob(sessionStorage.getItem(btoa(key)) || '');
    return {
      Authorization: get('token'),
      userId: get('usr_userid'),
      usr_name: get('usr_name'),
      usr_of_siscon: get('usr_of_siscon'),
      usr_of_branch: get('usr_of_branch'),
      df_year_beg: get('df_year_beg'),
      df_year_end: get('df_year_end'),
      df_doc_no_ts_format: get('df_doc_no_ts_format'),
      br_city: get('br_city'),
      br_name: get('br_name'),
      br_company_code: get('br_company_code'),
      fin_year_beg: get('fin_year_beg'),
      fin_year_end: get('fin_year_end'),
      fin_year_format: get('fin_year_format'),
      usr_br_city: get('usr_br_city'),
      usr_br_name: get('usr_br_name'),
      usr_company_code: get('usr_company_code'),
    };
  }

  private addRequests(): void {
    if (this.totalRequests === 0) {
      this.isLoadingSubject.next(true);
    }
    this.totalRequests++;
  }

  private decreaseRequests(): void {
    this.totalRequests--;
    if (this.totalRequests === 0) {
      this.isLoadingSubject.next(false);
    }
  }

  private cdkSpinnerCreate() {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });
  }

  private showSpinner() {
    this.spinnerTopRef.attach(new ComponentPortal(MatSpinner));
  }

  private stopSpinner() {
    this.spinnerTopRef.detach();
  }

  isLoading(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }

  get(url: string): Observable<HttpServiceResponseModel> {
    return this.httpClient.get<HttpServiceResponseModel>(url);
  }

  post(url: string, data: any, headers: { Authorization: string; }): Observable<any> {
    this.commonsService.show();
    return this.httpClient.post<HttpServiceResponseModel>(url, data).pipe(
      map((res) => {
        this.commonsService.hide();
        return res;
      })
    );
  }

  post_wo_spinner(url: string, data: any): Observable<any> {
    return this.httpClient.post<HttpServiceResponseModel>(url, data).pipe(
      map((res) => res)
    );
  }

  post_header(url: string, data: any, headerParam: any): Observable<any> {
    const httpHeaders = new HttpHeaders(headerParam);
    return this.httpClient.post<HttpServiceResponseModel>(url, data, { headers: httpHeaders });
  }

  put(url: string, data: any): Observable<any> {
    return this.httpClient.put<HttpServiceResponseModel>(url, data);
  }

  delete(url: string, options: any): Observable<any> {
    return this.httpClient.delete<HttpServiceResponseModel>(url, options);
  }
}

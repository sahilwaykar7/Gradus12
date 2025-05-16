import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../../../../core/services/http.service';
import { environment } from '../../../../../environments/environment';
import { HttpServiceResponseModel } from '../../../../core/models/HttpServiceResponseModel';


const POST_USER_DETAILS = 'change-pwd-user-validate';
const UPDATE_PASSWORD = 'change-pwd-user';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  completeUrl: string;
  payload: any


  constructor(private httpService: HttpService,
  ) { }

  validateUser(user_id: any, password: any): Observable<any> {
    this.completeUrl = environment.baseUrl + '/' + POST_USER_DETAILS

    console.log('user_id2', user_id);
    console.log('pwd', password);
    this.payload = {
      user_id: user_id,
      password: password,
      userInformationDto: {
        usr_userid: atob(sessionStorage.getItem(btoa('userId')) || ''),
        usr_name: atob(sessionStorage.getItem(btoa('username')) || ''),
        fin_year_beg: atob(sessionStorage.getItem(btoa('fin_year_beg')) || ''),
        fin_year_end: atob(sessionStorage.getItem(btoa('fin_year_end')) || ''),
        fin_year_format: atob(sessionStorage.getItem(btoa('fin_year_format')) || ''),
        usr_company_code: atob(sessionStorage.getItem(btoa('usr_company_code')) || ''),
        usr_of_siscon: atob(sessionStorage.getItem(btoa('usr_of_siscon')) || ''),
        usr_of_branch: atob(sessionStorage.getItem(btoa('usr_of_branch')) || ''),
      },
    }
    const headers = {
      Authorization: environment.loginToken,  // ✅ pull from environment
    };
    return this.httpService.post_header(this.completeUrl, this.payload, headers).pipe(
      map((res: HttpServiceResponseModel) => {
        const responsePayload = res; // Assign the response to a new variable
        console.log(responsePayload);
        return responsePayload; // Return the response directly
      })
    )
  }



  updatePassword(user_id: string, password: any): Observable<any> {
    this.completeUrl = environment.baseUrl + '/' + UPDATE_PASSWORD

    this.payload = {
      user_id: user_id,
      confirmPassword: password,
      userInformationDto: {
        usr_userid: atob(sessionStorage.getItem(btoa('userId')) || ''),
        usr_name: atob(sessionStorage.getItem(btoa('username')) || ''),
        fin_year_beg: atob(sessionStorage.getItem(btoa('fin_year_beg')) || ''),
        fin_year_end: atob(sessionStorage.getItem(btoa('fin_year_end')) || ''),
        fin_year_format: atob(sessionStorage.getItem(btoa('fin_year_format')) || ''),
        usr_company_code: atob(sessionStorage.getItem(btoa('usr_company_code')) || ''),
        usr_of_siscon: atob(sessionStorage.getItem(btoa('usr_of_siscon')) || ''),
        usr_of_branch: atob(sessionStorage.getItem(btoa('usr_of_branch')) || ''),
      },
    }
    const headers = {
      Authorization: environment.loginToken,  // ✅ pull from environment
    };
    return this.httpService.post_header(this.completeUrl, this.payload, headers).pipe(
      map((res: HttpServiceResponseModel) => {
        const responsePayload = res; // Assign the response to a new variable
        console.log(responsePayload);
        return responsePayload; // Return the response directly
      })
    )
  }
}

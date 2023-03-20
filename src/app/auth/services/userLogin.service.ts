import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { userDataValidation } from '../interfaces/userDataValidation';
import { userInformation } from '../../interfaces/userInformation';
import { Select, Store } from "@ngxs/store";
import { AddUserInformation } from "../../state/User.action";

@Injectable({
  providedIn: 'root'
})
export class UserLoginServices {

  constructor(private http: HttpClient, private store: Store) { }

  getLogin(userDataValidation: userDataValidation): Observable<any> {
    const userPassword: string = userDataValidation.userPassword;
    const userNickname: string = userDataValidation.userNickname;
    const url = `${environment.API_URL}/login?userPassword=${userPassword}&userNickname=${userNickname}`;

    return this.http.get<userInformation>(url).pipe(
      map((httpResponse) => {
        this.store.dispatch(new AddUserInformation(httpResponse));
        const userInformation: userInformation = { ...httpResponse }
        return userInformation;
      }),
      catchError((err) => {
        this.errorMessage(err)
        return '';
      })
    );
  }


  errorMessage(err: any) {
    throwError(err);
    return {
      errorType: '',
      message: '',
      isError: ''
    };
  }
}

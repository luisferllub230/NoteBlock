import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { userDataValidation } from '../interfaces/userDataValidation';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServices {

  constructor(private http: HttpClient) { }

  getLogin(userDataValidation: userDataValidation): Observable<any> {


    //TODO: USE GET NOT POST FOR validate
    return this.http.get(`${environment.API_URL}/login`).pipe(
      map((httpResponse) => {
        console.log("from interfaces",httpResponse);
      }),
      catchError((err) => this.errorMessage(err))
    );
  }


  errorMessage(err: any): Observable<any> {
    console.log(err);
    return throwError(err);
  }
}

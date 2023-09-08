
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  private apiUrl = 'http://localhost:8080/work-experience'; 

  constructor(private http: HttpClient) { 

  }
  httpOptions = {
    headers : new HttpHeaders ({
        'content-Type' : 'application/json'
    })
    
  }
  getWorkExperience(): Observable<any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      //Get client-side error
      errorMessage = error.error.message;
    } else {
      //get server-side error
      errorMessage = 'Error code: ${error.status}\n Message: ${error.message}';
    }
    window.alert(errorMessage); 
    return throwError(errorMessage);
  }
}


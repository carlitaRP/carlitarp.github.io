import { Injectable } from '@angular/core';
   import { HttpClient, HttpHeaders } from '@angular/common/http';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';

   @Injectable({
     providedIn: 'root'
   })
   export class InterestsService {

     private apiUrl = 'http://localhost:8080/interests';

     constructor(private http: HttpClient) { }

     httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     }

     getInterests(): Observable<{ [key: string]: string }> { // Cambio en el tipo de retorno
       return this.http.get<{ [key: string]: string }>(this.apiUrl, this.httpOptions) // Cambio en el tipo genérico
         .pipe(
           retry(1),
           catchError(this.handleError)
         );
     }

     handleError(error: any) {
       let errorMessage = '';
       if (error.error instanceof ErrorEvent) {
         errorMessage = error.error.message;
       } else {
         errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
       }
       window.alert(errorMessage);
       return throwError(errorMessage);
     }
   }
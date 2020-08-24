import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Circuit } from "../models/circuit.model";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CircuitDataService {
  private circuitDataUrl: string = "http://localhost:5000/v1/circuits";

  constructor(private http: HttpClient) { 
  }

  getCircuits(): Observable<Array<Circuit>> {
    return this.http.get<Array<Circuit>>(`${this.circuitDataUrl}`).pipe(
      tap(data => console.log(`returned: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  getCircuit(id: number): Observable<Circuit> {
    return this.http.get<Circuit>(`${this.circuitDataUrl}/${id}`).pipe(
      tap(data => console.log(`returned: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

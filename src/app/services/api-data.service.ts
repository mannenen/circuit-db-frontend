import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private jsonUrl = 'assets/api.json'

  constructor(private http: HttpClient) { }

  getURL(): Observable<string> {
    return this.http.get<string>(this.jsonUrl).pipe(
      tap(data => console.log(`Read: ${JSON.stringify(data)}`)),
      map(data => data['url'])
    );
  }
}
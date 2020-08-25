import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProviderDataService {
  private providerUrl: string = "http://localhost:5000/v1/providers";

  constructor(private http: HttpClient) { }

  getProviders(): Observable<string[]> {
    return this.http.get<string[]>(this.providerUrl).pipe(
      tap(data => console.log(`[ProviderService] Received: ${JSON.stringify(data)}`))
    );
  }
}

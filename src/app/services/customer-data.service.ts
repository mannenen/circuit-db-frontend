import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  private customerDataUrl: string = "http://localhost:3000/customers";

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerDataUrl).pipe(
      tap(data => console.log(`[CustomerDataService] Received: ${JSON.stringify(data)}`))
    );
  }

  addCustomers(customers: Customer[]) {
    return this.http.put<Customer[]>(this.customerDataUrl, customers).pipe(
      tap(data => console.log(`[CustomerDataService] Sending: ${JSON.stringify(data)}`))
    );
  }

  addCustomersToCircuit(customers: Customer[], cid: string) {
    return this.http.put<Customer[]>(`${this.customerDataUrl}/${cid}`, customers).pipe(
      tap(data => console.log(`[CustomerDataService.addCustomers.ToCircuit] Sending: ${JSON.stringify(data)}`))
    );
  }
}

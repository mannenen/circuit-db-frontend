import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerDataService } from 'src/app/services/customer-data.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent implements OnInit {
  @Output() addedCustomer = new EventEmitter<Customer>();

  control = new FormControl();
  customers: Customer[];
  filteredCustomers: Observable<Customer[]>;

  constructor(private customerData$: CustomerDataService) { }

  ngOnInit(): void {
    this.customerData$.getCustomers().subscribe({
      next: customers => {
        this.customers = customers;
        this.filteredCustomers = this.control.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(value => this._filter(value))
          )
      }
    })
  }

  displayFn(customer: Customer) {
    return customer && customer.name ? customer.name : '';
  }

  private _filter(value: string): Customer[] {
    const filterValue = value.toLocaleLowerCase();

    return this.customers.filter(option => option.name.toLocaleLowerCase().includes(filterValue));
  }
}

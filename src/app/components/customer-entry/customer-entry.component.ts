import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerDataService } from 'src/app/services/customer-data.service';
import { FormControl, FormGroup, NgForm, NgControlStatus } from '@angular/forms';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent implements OnInit {
  @Output() addedCustomer = new EventEmitter<Customer>();
  @ViewChild('formDirective') private formDirective: NgForm;
  form = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl()
  });

  customers: Customer[];
  filteredCustomers: Observable<Customer[]>;

  constructor(private customerData$: CustomerDataService) { }

  ngOnInit(): void {
    this.customerData$.getCustomers().subscribe({
      next: customers => {
        this.customers = customers;
        this.filteredCustomers = this.form.get('name').valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(value => this._filter(value))
          )
      }
    })
  }

  onSelected(event: MatAutocompleteSelectedEvent) {
    let customer: Customer = event.option.value as Customer;

    this.form.get('email').setValue(customer.contact ? customer.contact.email : "");
    this.form.get('phone').setValue(customer.contact ? customer.contact.phone : "");
  }

  submitCustomer() {
    const formValue = this.form.value;
    const submitted: Customer = {
      name: formValue.name,
      contact: {
        email: formValue.email,
        phone: formValue.phone
      }
    };
    this.addedCustomer.emit(submitted);

    this.resetForm();
  }

  resetForm() {
    this.form.controls['name'].setValue('');
    this.form.controls['email'].setValue('');
    this.form.controls['phone'].setValue('');

    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity({
      emitEvent: false
    })
  }

  displayFn(customer: Customer) {
    return customer && customer.name ? customer.name : '';
  }

  private _filter(value: string): Customer[] {
    const filterValue = value.toLocaleLowerCase();

    return this.customers.filter(option => option.name.toLocaleLowerCase().startsWith(filterValue));
  }
}

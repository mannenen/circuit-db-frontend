import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerDataService } from 'src/app/services/customer-data.service';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent implements OnInit {
  @Output() addedCustomer = new EventEmitter<Customer>();
  name = new FormControl('', this._nameValidator());
  email = new FormControl();
  phone = new FormControl();

  customers: Customer[];
  filteredCustomers: Observable<Customer[]>;

  constructor(private customerData$: CustomerDataService) { }

  ngOnInit(): void {
    this.customerData$.getCustomers().subscribe({
      next: customers => {
        this.customers = customers;
        this.filteredCustomers = this.name.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(value => this._filter(value))
          );
      }
    });
  }

  // autofills email and phone with any already-available values
  onSelected(event: MatAutocompleteSelectedEvent) {
    let customer: Customer = event.option.value as Customer;

    this.email.setValue(customer.contact ? customer.contact.email : "");
    this.phone.setValue(customer.contact ? customer.contact.phone : "");
  }

  submitCustomer() {
    const submitted: Customer = {
      name: this.name.value,
      contact: {
        email: this.email.value,
        phone: this.phone.value
      }
    };
    this.addedCustomer.emit(submitted);

    this.reset();
  }

  reset() {
    this.name.reset('', {
      emitEvent: false
    });
    this.email.reset();
    this.phone.reset();
  }

  displayFn(customer: Customer) {
    return customer && customer.name ? customer.name : '';
  }

  // this is necessary because after submitting the form, the name field is marked invalid despite the form itself being 'pristine'
  // this allows us to reset the form state on submit without marking the name as invalid
  private _nameValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const invalid = (control.value === '' && !control.pristine);
      return invalid ? { required: { value: control.value } } : null;
    }
  }

  private _filter(value: string): Customer[] {
    const filterValue = value.toLocaleLowerCase();

    return this.customers.filter(option => option.name.toLocaleLowerCase().startsWith(filterValue));
  }
}

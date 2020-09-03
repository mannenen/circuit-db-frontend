import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerDataService } from 'src/app/services/customer-data.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent implements OnInit {
  name: FormControl = new FormControl('', Validators.required);
  form: FormGroup = new FormGroup({
    name: this.name,
    email: new FormControl(''),
    phone: new FormControl('')
  });

  get email() { return this.form.controls.email; }
  get phone() { return this.form.controls.phone; }

  customers: Customer[];
  filteredCustomers: Observable<Customer[]>;
  stagedCustomers: Customer[] = [];
  @Output() confirmedCustomers = new EventEmitter<Customer[]>();

  constructor(private customerData$: CustomerDataService) { }

  ngOnInit(): void {
    this.customerData$.getCustomers().subscribe({
      next: data => {
        this.customers = data;
        this._setFilter();
      }
    });
  }

  onSave() {
    this.stagedCustomers.push({
      name: this.name.value,
      contact: {
        email: this.email.value ? this.email.value : '',
        phone: this.phone.value ? this.phone.value : ''
      }
    });
    this.form.reset('', {
      emitEvent: false
    });
    this._setFilter();
  }

  onSelect(event: MatAutocompleteSelectedEvent) {
    const cust: Customer = <Customer>event.option.value;
    
    this.email.setValue(cust.contact?.email ? cust.contact.email : '');
    this.phone.setValue(cust.contact?.phone ? cust.contact.phone : '');
    this.name.setValue(cust.name);

    // resets filter criteria
    this._setFilter();
  }

  confirmCustomers() {
    this.confirmedCustomers.emit(this.stagedCustomers);
    this.stagedCustomers = [];
  }

  _setFilter() {
    this.filteredCustomers = this.name.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(value => this._filter(value))
    );
  }

  _filter(value: string): Customer[] {
    const filterValue = value.toLocaleLowerCase()
    return this.customers.filter(option => option.name.toLocaleLowerCase().startsWith(filterValue));
  }
}

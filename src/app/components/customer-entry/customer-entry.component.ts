import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent implements OnInit {
  @Output() addedCustomer = new EventEmitter<Customer>();

  name: string = '';
  phone: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  checkSubmit(event: KeyboardEvent) {
    event.preventDefault();

    if (event.key === "Enter") {
      this.createCustomer();
    }
  }

  createCustomer() {
    this.addedCustomer.emit({
      name: this.name,
      contact: {
        phone: this.phone,
        email: this.email
      }
    });

    this.name = this.email = this.phone = '';
  }

}

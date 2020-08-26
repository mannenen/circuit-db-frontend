import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @Input()
  get customers(): Customer[] { return this._customers; }
  set customers(value: Customer[]) { 
    this._customers = value;
    this.dataSource.data = value;
  }

  private _customers: Customer[] = [];
  
  displayedColumns: string[] = ['name', 'email', 'phone'];
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();

  constructor() { }

  ngOnInit(): void {

  }

}

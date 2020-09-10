import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

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
  @ViewChild('customerTable') table: MatTable<Customer>;

  private _customers: Customer[] = [];
  
  displayedColumns: string[] = ['name', 'email', 'phone', 'select'];
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();
  selection = new SelectionModel<Customer>(true, []);
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onUpdate(): void {
    this.table.renderRows();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

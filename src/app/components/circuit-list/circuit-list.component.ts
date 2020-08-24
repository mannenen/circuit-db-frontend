import { Component, OnInit, ViewChild, ErrorHandler } from '@angular/core';
import { Circuit } from "../../models/circuit.model";
import { CircuitDataService } from "../../services/circuit-data.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { SnackBarErrorHandler } from 'src/app/error-handler';

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrls: ['./circuit-list.component.scss']
})
export class CircuitListComponent implements OnInit {
  displayedColumns: string[] = ['cid', 'provider', 'customers'];
  dataSource: MatTableDataSource<Circuit>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private circuitDataService: CircuitDataService,
              private errorHandler: SnackBarErrorHandler) { }

  ngOnInit(): void {
    this.circuitDataService.getCircuits().subscribe({
      next: circuits => {
        this.dataSource = new MatTableDataSource<Circuit>(circuits);
        this.dataSource.paginator = this.paginator;
      },
      error: err => {
        this.errorHandler.handleError(err);
      }
    });
  }

  performFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}

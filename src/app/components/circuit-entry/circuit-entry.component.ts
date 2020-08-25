import { Component, OnInit } from '@angular/core';
import { ProviderDataService } from "../../services/provider-data.service";
import { SnackBarErrorHandler } from 'src/app/error-handler';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-circuit-entry',
  templateUrl: './circuit-entry.component.html',
  styleUrls: ['./circuit-entry.component.scss']
})
export class CircuitEntryComponent implements OnInit {
  providers: string[];
  control = new FormControl();
  filteredProviders: Observable<string[]>;
  customers: Customer[] = [];

  constructor(private providerService: ProviderDataService,
              private errorHandler: SnackBarErrorHandler) { }

  ngOnInit(): void {
    this.providerService.getProviders().subscribe({
      next: providers => {
        this.providers = providers;
        this.filteredProviders = this.control.valueChanges
          .pipe(
            startWith(''),
            map(name => name ? this._filter(name): this.providers.slice())
          )
      },
      error: err => {
        this.errorHandler.handleError(err);
      }
    })
  }

  onCustomerAdded(customer: Customer) {
    this.customers.push(customer);
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLocaleLowerCase();

    return this.providers.filter(option => option.toLocaleLowerCase().indexOf(filterValue) === 0);
  }

}

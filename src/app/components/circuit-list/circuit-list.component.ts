import { Component, OnInit } from '@angular/core';
import { Circuit } from "../../models/circuit.model";
import { CircuitDataService } from "../../services/circuit-data.service";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrls: ['./circuit-list.component.scss']
})
export class CircuitListComponent implements OnInit {
  circuits: Array<Circuit>;
  filteredCircuits: Array<Circuit>;

  constructor(private circuitDataService: CircuitDataService) { }

  ngOnInit(): void {
    this.circuitDataService.getCircuits().subscribe({
      next: circuits => {
        this.circuits = circuits;
        this.filteredCircuits = circuits;
      },
      error(err) { console.error(err) }
    });
  }

  // thank you, github.com/DeborahK
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCircuits = (this.listFilter ? this.performFilter(this.listFilter) : this.circuits);
  }

  performFilter(filterBy: string): Array<Circuit> {
    filterBy = filterBy.toLocaleLowerCase();
    return this.circuits.filter((circuit) => {
      return circuit.cid.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }
}

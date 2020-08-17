import { Component, OnInit } from '@angular/core';
import { Circuit } from "../../models/circuit.model";
import { CircuitDataService } from "../../services/circuit-data.service";

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrls: ['./circuit-list.component.scss']
})
export class CircuitListComponent implements OnInit {
  circuits: Array<Circuit>;

  constructor(private circuitDataService: CircuitDataService) { }

  ngOnInit(): void {
    this.circuitDataService.getCircuits().subscribe({
      next: circuits => this.circuits = circuits,
      error(err) { console.error(err) }
    });
  }
}

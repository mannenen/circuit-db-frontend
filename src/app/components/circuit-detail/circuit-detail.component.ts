import { Component, OnInit } from '@angular/core';
import { CircuitDataService } from '../../services/circuit-data.service';
import { Circuit } from '../../models/circuit.model';
import { Customer } from '../../models/customer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-circuit-detail',
  templateUrl: './circuit-detail.component.html',
  styleUrls: ['./circuit-detail.component.scss']
})
export class CircuitDetailComponent implements OnInit {
  circuit: Circuit = {
    cid: "",
    provider: ""    
  };
  
  displayedColumns: string[] = ['name', 'email', 'phone'];
  dataSource: MatTableDataSource<Customer>;

  constructor(private circuitDataService: CircuitDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.circuitDataService.getCircuit(id).subscribe(response => {
        this.circuit = response;
        this.dataSource = new MatTableDataSource(this.circuit.customers);
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/circuits']);
  }

}

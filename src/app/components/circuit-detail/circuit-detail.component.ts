import { Component, OnInit } from '@angular/core';
import { CircuitDataService } from '../../services/circuit-data.service';
import { Circuit } from '../../models/circuit.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';

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
  
  constructor(private circuitDataService: CircuitDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.circuitDataService.getCircuit(id).subscribe(response => {
        this.circuit = response;
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/circuits']);
  }

  onCustomerAdded(customer: Customer) {
    this.circuit.customers.push(customer);
  }

}

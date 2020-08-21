import { Component, OnInit } from '@angular/core';
import { CircuitDataService } from '../../services/circuit-data.service';
import { Circuit } from '../../models/circuit.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-circuit-detail',
  templateUrl: './circuit-detail.component.html',
  styleUrls: ['./circuit-detail.component.scss']
})
export class CircuitDetailComponent implements OnInit {
  circuit: Circuit;

  constructor(private circuitDataService: CircuitDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCircuit(id);
    }
  }

  getCircuit(id: number) {
    this.circuitDataService.getCircuit(id).subscribe(response => this.circuit = response);
  }

  onBack(): void {
    this.router.navigate(['/circuits']);
  }

}

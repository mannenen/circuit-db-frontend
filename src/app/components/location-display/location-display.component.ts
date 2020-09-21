import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-location-display',
  templateUrl: './location-display.component.html',
  styleUrls: ['./location-display.component.scss']
})
export class LocationDisplayComponent implements OnInit {
  @Input() location: Address;

  constructor() { }

  ngOnInit(): void {
  }

}

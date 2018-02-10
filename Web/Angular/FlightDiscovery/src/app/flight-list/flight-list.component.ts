import { Component, OnInit } from '@angular/core';
import { Flight } from './flights';
import { FlightService } from '../shared/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  showPlanes: boolean = false;
  filteredFlights: Array<Flight>;
  filter: string;
  showPeriodTime: boolean = false;
  updateState: boolean = false;

  get flightFilter(){
    return this.filter;
  }

  set flightFilter(value: string){
    this.filter = value;
    this.filteredFlights = this.filter ? this.filterFlights(this.filter.toLowerCase()) : this.flights;
  }

  flights: Array<Flight>;

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.flights = this.flightService.getFlights();
    this.filteredFlights = this.flights;
  }

  toggleImages(){
    this.showPlanes = !this.showPlanes;
  }
  toggleClock(){
    this.showPeriodTime = !this.showPeriodTime;
  }

  toggleUpdateState(){
    this.updateState = !this.updateState;
  }

  filterFlights(filter: string): Array<Flight> {
    return this.flights.filter((flight) => {
      return flight.destination.toLowerCase().indexOf(filter) !== -1 ||
              flight.gate.toLowerCase().indexOf(filter) !== -1 ||
              String(flight.number).toLowerCase().indexOf(filter) !== -1 ||
              flight.type.toLowerCase().indexOf(filter) !== -1;
    });
  }
}

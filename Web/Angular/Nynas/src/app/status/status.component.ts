import { Component, OnInit } from '@angular/core';
import { TableService } from '../shared/table.service';
import { Table } from '../shared/component';
import { WeatherData } from '../shared/data';

@Component({
  selector: 'nynas-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, Table {

  search: string;
  weatherData: Array<WeatherData>;
  trainData: Array<Object>;

  constructor(private tableService: TableService) { }

  updateWeather(data: Array<WeatherData>){
    this.weatherData = data;
  }

  updateTrain(data: Array<any>){

  }

  ngOnInit() {
    this.tableService.getWeather(this);
    this.trainData = this.tableService.getTrain(this.search);
  }
}

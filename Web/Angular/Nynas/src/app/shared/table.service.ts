import { Injectable } from '@angular/core';
import { WeatherService } from './remote/weather.service';
import { Table } from './component';

@Injectable()
export class TableService {

  constructor(private weatherService: WeatherService) { }


  getWeather(updatableTable: Table) {
    return this.weatherService.getWeather(updatableTable);
  }

  getTrain(from: string): Array<Object> {
    return [
      {
        number: 42,
        depart: '10:42',
        arrive: '11:32'
      },
      {
        number: 42,
        depart: '11:42',
        arrive: '12:32'
      },
      {
        number: 42,
        depart: '12:42',
        arrive: '13:32'
      }
    ]
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../data';
import { Table } from '../component';

@Injectable()
export class WeatherService {

  table: Table;

  constructor(private http: HttpClient) { }

  getWeather(updatableTable: Table) {
    this.table = updatableTable;
    this.performCall();
  }  

  parseWeatherResponse(data) {
    let weatherData = new Array<WeatherData>();

    for(let index = 0; index < 7; index++){
      var time = data.list[index].dt_txt;
      time = new Date(time).getHours() + ":00";
      if(time.length < 5){
        time = 0 + time;
      }

      var wind = data.list[index].wind.speed.toFixed(1);
      var temp = data.list[index].main.temp;
      temp = Number(temp - 273.15).toFixed(1);

      var cloud = data.list[index].clouds.all;

      var weatherDesc = data.list[index].weather[0].description;
      weatherDesc = weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1);

      weatherData.push({
        clock: time,
        wind: wind,
        tempature: temp,
        description: weatherDesc
      });
      this.table.updateWeather(weatherData);
    }
  }

  performCall() {
    this.http.
      get("http://api.openweathermap.org/data/2.5/forecast?q=Nynashamn&APPID=5b755d33b1f3737e41eab07a7de9424e&lang=se").
      subscribe( (data) => {
        this.parseWeatherResponse(data);
      });
  }
}

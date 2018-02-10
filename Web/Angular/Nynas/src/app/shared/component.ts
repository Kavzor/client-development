import { WeatherData } from "./data";

export interface Table {
  updateWeather(data: Array<WeatherData>);
  updateTrain(data: Array<any>)
}
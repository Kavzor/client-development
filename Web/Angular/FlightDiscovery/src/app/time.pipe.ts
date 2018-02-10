import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: string, to: string, from: string): string {
    if(value === '0' || Number.isNaN(Number(value))){
      return "No delay";
    }
    if(to.toLowerCase() === 'hour'){
      return this.toHour(value, from);
    }
  }

  toHour(value: string, from: string): string {
    let hourformat;
    switch(from.toLowerCase()){
      case 'minute': 
        hourformat = (Number(value) / 60).toFixed(0);
        hourformat = hourformat > 1 ? hourformat + ' hours' : hourformat + ' hour';
        return hourformat;
    }
  }

}

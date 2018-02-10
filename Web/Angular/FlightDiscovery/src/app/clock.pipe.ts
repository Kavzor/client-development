import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clock'
})
export class ClockPipe implements PipeTransform {

  transform(value: string, showPeriod: boolean): string {
    if(Number.isNaN(Number(value[0])) || !showPeriod){
      return value;
    }
    else {
      if(value.indexOf(":") > 1){
        if(Number(value[0]) > 0 && Number(value[1]) > 2){
          value = (Number(value[0]) - 1)  + value.substr(1);
          value = value[0] + (Number(value[1]) - 2) + value.substr(2);
          return value + ' pm';
        }
      }
      return value + ' am';
    }
  }

  convertAfterMidday(){

  }

}

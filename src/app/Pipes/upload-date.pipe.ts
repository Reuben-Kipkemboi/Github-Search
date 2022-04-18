import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uploadDate'
})
export class UploadDatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) return 'Last update is less than 30 seconds ago';
      const timeIntervals: any = {
        year: 31536000, //seconds in a year 365*24*60*60
        month: 2592000, //seconds in a month
        week: 604800,  //seconds in a a week
        day: 86400, //seconds in a day
        hour: 3600, //seconds in an hour
        minute: 60,//seconds in a minute
        second: 1, //second interval a single second***
      };
      let timeTimer;
      for (const sec in timeIntervals) {
        timeTimer = Math.floor(seconds / timeIntervals[sec]);
        if (timeTimer > 0)
          if (timeTimer === 1) {
            return 'Updated' + timeTimer + ' ' + sec + ' ago';
          } else {
            return 'Updated' +'' + timeTimer + ''  + ' ' + sec + 's ago';
          }
      }
    }
    return value;
  }
}

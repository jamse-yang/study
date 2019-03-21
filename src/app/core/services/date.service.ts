import {Injectable} from '@angular/core';

@Injectable()
export class DateService {

  getDate(appendDay?: number): Date {
    const nextDay = new Date();
    if (appendDay) {
      nextDay.setDate(nextDay.getDate() + appendDay);
    }

    return nextDay;
  }
}

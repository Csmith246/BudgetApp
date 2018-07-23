import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  monthLookup = {
    0:"January",
    1:"February",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"July",
    7:"August",
    8:"September",
    9:"October",
    10:"November",
    11:"December"
  };

  currentDate = new Date();

  constructor() { }

  getCurrentMonthYear(){
    return this.monthLookup[this.currentDate.getMonth()] + ' ' + this.currentDate.getFullYear()
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { DatetimeService } from './datetime.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private sessionUser;
  private currentMonthYear;

  constructor(
    public db: AngularFireDatabase,
    public dateService: DatetimeService
  ) { 
    this.currentMonthYear = dateService.getCurrentMonthYear();
  }

  setCurrentUser(userId){
    this.sessionUser = userId;
  }

  getUserData(userId){
    return this.db.object(userId);
  }

  // queries the DB to get Budget and Income data
  getBudgetIncome(monthOffset?:number){
    if(monthOffset && (0<=monthOffset && monthOffset<12)){
      
    }
  }
}

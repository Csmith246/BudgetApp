import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { DatetimeService } from './datetime.service';
import { Observable, Subject } from 'rxjs';
import { Income } from '../models/income';
import { BudgetItem } from '../models/budget-item';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private currentUser;
  private currentMonthYear;

  private incomeDataRef: AngularFireList<Object>;
  private budgetsDataRef: AngularFireList<Object>;

  public currentIncomeData: Subject<Income[]> = new Subject();
  public currentBudgetsData: Subject<BudgetItem[]> = new Subject();

  constructor(
    public db: AngularFireDatabase,
    public dateService: DatetimeService
  ) { 
    this.currentMonthYear = dateService.getCurrentMonthYear();
  }

  setCurrentUser(userId){
    this.currentUser = userId;
  }

  getUserData(userId){
    return this.db.object(userId);
  }

  setUserData(data){
    function formatIncomes(rawIncomeData: Object){
      let returnArr = [];
      for(var key in rawIncomeData){
        if(rawIncomeData.hasOwnProperty(key)){
          let currIncome = rawIncomeData[key];
          currIncome['key'] = key;
          returnArr.push(currIncome);
        }
      }
      console.log(returnArr);
      return returnArr;
    }
    console.log("USER DATA", data);
    let newIncomes:Income[] = formatIncomes(data["July 2018"].Income); // needs to be refactored to deal with different months

    this.currentIncomeData.next(newIncomes);
  }

  setupIncomeAndBudgets(){
    this.incomeDataRef = this.db.list(`${this.currentUser}/${this.currentMonthYear}/Income`);
    this.budgetsDataRef = this.db.list(`${this.currentUser}/${this.currentMonthYear}/Budgets`);
  }

  getIncome(): Subject<Income[]>{
    return this.currentIncomeData;
  }

  addIncome(incomeData){
    this.incomeDataRef.push(incomeData);
    console.log("In add");
  }

  editIncome(newIncomeData, key){
    this.incomeDataRef.update(key, newIncomeData);
  }

  deleteIncome(key){
    this.incomeDataRef.remove(key);
  }
}

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

  setCurrentUser(userId) {
    this.currentUser = userId;
  }

  getUserData(userId) {
    return this.db.object(userId);
  }

  setUserData(data) {
    function formatData(data: Object) { //take different entries, add keys to the objects, then put in array
      let returnArr = [];
      console.log("IN FORMATDATA", data)
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          let formatted = data[key];
          formatted['key'] = key;
          returnArr.push(formatted);
        }
      }
      console.log("IN RETURN ARR", returnArr);
      return returnArr;
    }

    function makeBudgetArray(data:Object[]):BudgetItem[]{ //Put the Database Budgetdata into our BudgetItem data structure
      return data.map((item)=>{
        return new BudgetItem(item["key"], item["name"], item["budgetAmount"], item["type"], item["additionalInfo"]);
      });
    }

    console.log("USER DATA", data);
    let newIncomes: Income[] = formatData(data["July 2018"].Income); // needs to be refactored to deal with different months
    this.currentIncomeData.next(newIncomes);


    let newBudgets: BudgetItem[] = makeBudgetArray(formatData(data["July 2018"].Budgets));
    this.currentBudgetsData.next(newBudgets);
  }

  setupIncomeAndBudgets() {
    this.incomeDataRef = this.db.list(`${this.currentUser}/${this.currentMonthYear}/Income`);
    this.budgetsDataRef = this.db.list(`${this.currentUser}/${this.currentMonthYear}/Budgets`);
  }

  //Income CRUD methods
  getIncome(): Subject<Income[]> {
    return this.currentIncomeData;
  }

  addIncome(incomeData) {
    this.incomeDataRef.push(incomeData);
    console.log("In add");
  }

  editIncome(newIncomeData, key) {
    this.incomeDataRef.update(key, newIncomeData);
  }

  deleteIncome(key) {
    this.incomeDataRef.remove(key);
  }

  //Budget CRUD methods
  getBudgets(): Subject<BudgetItem[]> {
    return this.currentBudgetsData;
  }

  addBudget(newBudget) {
    this.budgetsDataRef.push(newBudget);
    console.log("In Budget ADD");
  }

  editBudget(newBudgetData, key) {
    this.budgetsDataRef.update(key, newBudgetData);
  }

  deleteBudget(key) {
    this.budgetsDataRef.remove(key);
  }
}

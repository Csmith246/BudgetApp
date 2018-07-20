import { Component, OnInit } from '@angular/core';

// Models
import { BudgetItem } from '../../models/budget-item';
import { FixedCost } from '../../models/fixed-cost';
import { VariableCost } from '../../models/variable-cost';
import { Income } from '../../models/income';

@Component({
  selector: 'app-current-month',
  templateUrl: './current-month.component.html',
  styleUrls: ['./current-month.component.scss']
})
export class CurrentMonthComponent implements OnInit {

  budgetItems: BudgetItem[] = [
    {name:'Bill 1', budgetAmount:300, itemType: new FixedCost(false)},
    {name:'Bill 2', budgetAmount:300, itemType: new VariableCost(37.54)},
    {name:'Bill 3', budgetAmount:500, itemType: new FixedCost(true)}
  ];

  incomeItems: Income[] = [
    {amount: 1487, source: 'Paycheck'},
    {amount: 1487, source: 'Paycheck'}
  ];

  // 1.delegate to a data service to get the data for this month which should be in firebase
  // 2. when you have the data, template it out properly in this class, for "Current Month"
  // 3. probably delgate to data service again to push updates of changed data back to Firebase

  constructor() { }

  ngOnInit() {
  }

}


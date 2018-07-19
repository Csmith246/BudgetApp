import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../../models/budget-item';
import { FixedCost } from '../../models/fixed-cost';
import { VariableCost } from '../../models/variable-cost';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  items: BudgetItem[] = [
    {name:'Bill 1', budgetAmount:300, itemType: new FixedCost(false)},
    {name:'Bill 2', budgetAmount:300, itemType: new VariableCost(37.54)},
    {name:'Bill 3', budgetAmount:500, itemType: new FixedCost(true)}
  ];

  constructor() { }

  ngOnInit() {
  }

}

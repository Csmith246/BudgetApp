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
    {name:'Car Payment', budgetAmount:300, itemType: {paid: false}},
    {name:'Fast', budgetAmount:300, itemType: {amountSpent: 37.54}},
    {name:'Rent', budgetAmount:500, itemType: {paid: true}}
  ];

  constructor() { }

  ngOnInit() {
  }

}

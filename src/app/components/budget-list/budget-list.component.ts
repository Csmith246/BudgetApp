import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  items: Object[] = [
    {name:'item1', budgetVal:300, currSpent: 150.45},
    {name:'item2', budgetVal:40, currSpent: 35.12},
    {name:'item3', budgetVal:500, currSpent: 500},
  ];

  constructor() { }

  ngOnInit() {
  }

}

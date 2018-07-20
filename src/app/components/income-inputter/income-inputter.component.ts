import { Component, OnInit, Input } from '@angular/core';

import { Income } from '../../models/income';

@Component({
  selector: 'app-income-inputter',
  templateUrl: './income-inputter.component.html',
  styleUrls: ['./income-inputter.component.scss']
})
export class IncomeInputterComponent implements OnInit {

  @Input() incomes: Income[];
  totalIncome: number;

  constructor() { }

  ngOnInit() {
    this.calcTotalIncome();
  }

  calcTotalIncome(){
    this.totalIncome = this.incomes
    .map(income=>{return income.amount;})
    .reduce((acc, currVal)=>{return acc+currVal;})
  }

}

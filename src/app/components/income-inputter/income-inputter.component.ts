import { Component, OnInit, Input } from '@angular/core';

import { Income } from '../../models/income';

@Component({
  selector: 'app-income-inputter',
  templateUrl: './income-inputter.component.html',
  styleUrls: ['./income-inputter.component.scss']
})
export class IncomeInputterComponent implements OnInit {

  @Input() incomes: Income[];

  constructor() { }

  ngOnInit() {
  }

}

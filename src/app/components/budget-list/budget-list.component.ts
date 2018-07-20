import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from '../../models/budget-item';


@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  @Input() data: BudgetItem[];

  constructor() { }

  ngOnInit() {
  }

}

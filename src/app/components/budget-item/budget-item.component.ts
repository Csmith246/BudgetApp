import { Component, OnInit, Input } from '@angular/core';

// Models
import { BudgetItem } from '../../models/budget-item';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss']
})
export class BudgetItemComponent implements OnInit {
  @Input() item: BudgetItem;

  constructor() { }

  ngOnInit() {
  }

}

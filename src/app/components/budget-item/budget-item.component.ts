import { Component, OnInit, Input } from '@angular/core';

// Models
import { BudgetItem } from '../../models/budget-item';
import { FixedCost } from '../../models/fixed-cost';
import { VariableCost } from '../../models/variable-cost';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss']
})
export class BudgetItemComponent implements OnInit {
  @Input() item: BudgetItem;

  paid: Boolean;
  amountSpent: number;

  constructor() { }

  ngOnInit() {
    if(this.item.itemType instanceof FixedCost){
      console.log(this.paid, "paid");
      this.paid = this.item.itemType.paid;
    } else{
      console.log("amountSpent", this.amountSpent);
      this.amountSpent = this.item.itemType.amountSpent;
    }
  }

}

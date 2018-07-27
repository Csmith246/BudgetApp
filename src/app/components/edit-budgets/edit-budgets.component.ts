import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { BudgetItem } from '../../models/budget-item';

@Component({
  selector: 'app-edit-budgets',
  templateUrl: './edit-budgets.component.html',
  styleUrls: ['./edit-budgets.component.scss']
})
export class EditBudgetsComponent implements OnInit {

  budgetItems: BudgetItem[];

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.dbService.getBudgets().subscribe(data => {
      this.budgetItems = data;
    });
  }

}

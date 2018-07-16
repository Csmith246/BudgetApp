import { FixedCost } from "./fixed-cost";
import { VariableCost } from "./variable-cost";

export class BudgetItem {
    name: string;
    budgetAmount: number;
    itemType: FixedCost | VariableCost;
}

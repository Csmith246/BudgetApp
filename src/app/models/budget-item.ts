import { FixedCost } from "./fixed-cost";
import { VariableCost } from "./variable-cost";

export class BudgetItem {
    key: string;
    name: string;
    budgetAmount: number;
    typeStr: string;
    itemType: FixedCost | VariableCost;

    constructor(key:string, name:string, budgetAmount:number, type:string, extraInfo:string){
        this.key = key;
        this.name = name;
        this.budgetAmount = budgetAmount;
        this.typeStr = type;
        if(type === "Fixed"){
            this.itemType = new FixedCost(extraInfo === "Paid");
        }else if(type === "Variable"){
            this.itemType = new VariableCost(parseInt(extraInfo));
        }else{
            console.log("Wrong itemType in budget-item constructor");
        }
    }
}

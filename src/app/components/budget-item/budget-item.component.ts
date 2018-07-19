import { Component, OnInit, Input, TemplateRef } from '@angular/core';

// ngx-bootstrap Modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    if(this.item.itemType instanceof FixedCost){
      this.paid = this.item.itemType.paid;
    } else{
      this.amountSpent = this.item.itemType.amountSpent;
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

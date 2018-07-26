import { Component, Input, TemplateRef, OnChanges } from '@angular/core';

// Services
import { DatabaseService } from '../../services/database.service';

// ngx-bootstrap Modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// Models
import { Income } from '../../models/income';


@Component({
  selector: 'app-income-inputter',
  templateUrl: './income-inputter.component.html',
  styleUrls: ['./income-inputter.component.scss']
})
export class IncomeInputterComponent implements OnChanges {

  @Input() incomes: Income[];
  totalIncome: number;
  modalRef: BsModalRef;
  currentSelectedIndex: number;

  constructor(
    private modalService: BsModalService,
    private dbService: DatabaseService
  ) { }


  ngOnChanges(){ // evrytime "@Input:incomes" changes, then recalc total
    this.calcTotalIncome();
  }

  openModal(template: TemplateRef<any>, index: number) {
    this.currentSelectedIndex = index;
    this.modalRef = this.modalService.show(template);
  }

  calcTotalIncome() {
    if (this.incomes.length !== 0) {
      this.totalIncome = this.incomes
        .map(income => { return +income.amount; })
        .reduce((acc, currVal) => { return acc + currVal; });
    }else{
      this.totalIncome = 0;
    }
  }

  addIncome(amount: number, source: string) {
    this.modalRef.hide();
    this.dbService.addIncome({amount: amount, source: source})
  }

  editIncome(amount: number, source: string, key: string) {
    this.modalRef.hide();
    this.dbService.editIncome({amount: amount, source: source}, key);
  }

  deleteIncome(key: string) {
    this.dbService.deleteIncome(key);
  }

}

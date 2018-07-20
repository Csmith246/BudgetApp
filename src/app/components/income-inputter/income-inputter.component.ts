import { Component, OnInit, Input, TemplateRef } from '@angular/core';

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
export class IncomeInputterComponent implements OnInit {

  @Input() incomes: Income[];
  totalIncome: number;
  modalRef: BsModalRef;
  currentSelectedIndex: number;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
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
    // console.log("TOTAL INCOME", this.totalIncome);
  }

  addIncome(amount: number, source: string) {
    this.modalRef.hide();
    console.log("IN ADD", amount, source);
    this.incomes.push({amount: amount, source: source});
    this.calcTotalIncome(); // Refactr to life cycle method???
  }

  editIncome(amount: number, source: string) {
    this.modalRef.hide();
    this.incomes[this.currentSelectedIndex] = {amount: amount, source: source};
    this.calcTotalIncome();
  }

  deleteIncome(index: number) {
    this.incomes.splice(index, 1);
    this.calcTotalIncome();
  }

}

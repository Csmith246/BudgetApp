import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngx-bootstrap imports
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { BudgetItemComponent } from './components/budget-item/budget-item.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { IsPaidPipe } from './pipes/is-paid.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BudgetItemComponent,
    BudgetListComponent,
    IsPaidPipe
  ],
  imports: [
    BrowserModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BudgetItemComponent } from './components/budget-item/budget-item.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetItemComponent,
    BudgetListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

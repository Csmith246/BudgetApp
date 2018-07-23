import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// ngx-bootstrap imports
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { BudgetItemComponent } from './components/budget-item/budget-item.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { IsPaidPipe } from './pipes/is-paid.pipe';
import { CurrentMonthComponent } from './components/current-month/current-month.component';
import { IncomeInputterComponent } from './components/income-inputter/income-inputter.component';

// Services
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    BudgetItemComponent,
    BudgetListComponent,
    IsPaidPipe,
    CurrentMonthComponent,
    IncomeInputterComponent
  ],
  imports: [
    BrowserModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

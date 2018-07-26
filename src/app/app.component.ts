import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

// Services
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';
import { DatetimeService } from './services/datetime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = null;
  topics: AngularFireObject<{}>;

  constructor(
    private auth: AuthService,
    private dbService: DatabaseService,
    private dateService: DatetimeService
  ) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => {
        this.user = user;
        console.log("USER", user);
        if (user != null) { // user object retrieved
          let sanitizedEmail = user.email.replace('.', ''); // need to santize for other bad chars;
          console.log(sanitizedEmail);
          this.dbService.setCurrentUser(sanitizedEmail);
          this.topics = this.dbService.getUserData(sanitizedEmail);
          let temp = this.topics.valueChanges();
          temp
            .subscribe((item) => {
              console.log("DATABASE RETRIEVE!!!", item);
              if (item) {
                // pass important parts to necessary components
                console.log("IN IF. USER exists and has data", item);
                // pass data to DB service, which is gona act as a store
                this.dbService.setUserData(item);
              } else {
                //let newUser = {}
                let newEntryConfig = {};
                let currentMonthYear = this.dateService.getCurrentMonthYear();
                newEntryConfig[currentMonthYear] = { "Budgets": "", "Income": "" };
                this.topics.set(newEntryConfig);
              }
              // Set up DB connections to Income and Budgets for that user directly--- THIS MAY NOT BE BEST PLACE. IT's gona be called more than necessary
              this.dbService.setupIncomeAndBudgets();

            });
        }
      }
    );

  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  logout() {
    this.auth.logout();
  }
}

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
        if (user!=null) {
          let sanitizedEmail = user.email;
          sanitizedEmail = sanitizedEmail.replace('.', ''); // need to santize for other bad chars
          console.log(sanitizedEmail);
          this.dbService.setCurrentUser(sanitizedEmail);
          this.topics = this.dbService.getUserData(sanitizedEmail);
          let temp = this.topics.valueChanges();
          temp.subscribe((item) => {
            console.log("DATABASE RETRIEVE!!!", item);
            if (item) {
              // pass important parts to necessary components
            } else {
              //let newUser = {}
              let newMonth = {};
              let currentMonthYear = this.dateService.getCurrentMonthYear();
              newMonth[currentMonthYear] = { "Budgets": "none" ,  "Income": "none" };
              //newUser[sanitizedEmail] = newMonth;
              this.topics.set(newMonth);
            }
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

import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = null;
  topics: Observable<any[]>;

  constructor(
    private auth: AuthService,
    public db: AngularFireDatabase
  ){}

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => {
        this.user = user;
        console.log("USER", user);
      }
    );
    this.topics = this.db.list('/topics').valueChanges();
    this.topics.subscribe((item)=>{
      console.log("DATABASE RETRIEVE!!!", item);
    });
  }

  loginWithGoogle(){
    this.auth.loginWithGoogle();
  }

  logout(){
    this.auth.logout();
  }
}

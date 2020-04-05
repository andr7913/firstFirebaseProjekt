import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../../Service/auth.service';
import {User} from '../../Service/user';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  private authService: AuthService;
  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  constructor(private fireAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router, private authService: AuthService ) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.firestore.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  ngOnInit() {

  }

  logout() {
    this.authService.logout();
  }

  update(user: User) {

  }

  delete(uid: string) {
    this.authService.deleteUser(uid);
  }
}

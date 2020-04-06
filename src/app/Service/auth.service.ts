import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from './user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private fireAuth: AngularFireAuth, private firestor: AngularFirestore, private router: Router) {
  }

  user$: Observable<User[]>;

  logout() {
    this.fireAuth.auth.signOut()
      .then(res => {
        this.router.navigateByUrl('/Home');
      });
  }

  creatuser(user: User) {
    this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(res => {
      user.Role = 'bruger';
      user.uid = res.user.uid;
      user.password = null;
      this.firestor.collection('user').doc(res.user.uid).set(user);
      this.router.navigateByUrl('/login');
    });

  }

  GetAll(): Observable<User[]> {
    return this.firestor.collection<User>('user').valueChanges();
  }


  deleteUser(uid: string) {
    this.firestor.collection('user').doc(uid).delete().then(r => {
      this.fireAuth.auth.currentUser.delete().then( k => {
        this.logout();
      });
    });
  }


  updateRole(user: User) {
    if (user.Role === 'admin' ) {
      this.firestor.collection('user').doc(user.uid).update({
        Role: 'bruger'
      });
    } else {
      this.firestor.collection('user').doc(user.uid).update({
        Role: 'admin'
      });
    }
  }
}

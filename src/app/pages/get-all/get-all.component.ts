import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Service/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {User} from '../../Service/user';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {

  user$: Observable<User[]>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.GetAll();
  }

  deleteUser(uid: string) {
    this.authService.deleteUser(uid);
  }

  updateRole(user: User) {
    this.authService.updateRole(user);
  }
}

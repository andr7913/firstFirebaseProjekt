import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as firebase from 'firebase';
import {config} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {Router} from '@angular/router';
import {AuthService} from '../../Service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  private authService: AuthService;

  // @ts-ignore
  constructor(private angularfireauth: AngularFireAuth, private router: Router, private authService: AuthService  ) {}

  ngOnInit() {
  }


  onSubmit() {
    this.angularfireauth.auth.signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value )
      .then(res => {
        this.router.navigateByUrl('/profile');
      });

  }
}

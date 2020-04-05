import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Service/auth.service';
import {User} from '../../Service/user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.scss']
})
export class CreatUserComponent implements OnInit {
  creatuserForm = new FormGroup({
    email: new FormControl(''),
    displayName: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(),
    password: new FormControl(),
    Role: new  FormControl(),
  });
  user: User;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }
  onSubmit() {
    this.user = this.creatuserForm.value;
    this.authService.creatuser(this.user);
  }
}


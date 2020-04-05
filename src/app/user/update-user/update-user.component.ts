import { Component, OnInit } from '@angular/core';
import {User} from '../../Service/user';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../Service/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  id: string;
user: User;
  updateuserForm = new FormGroup({
    email: new FormControl(''),
    displayName: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(),
    password: new FormControl(),
    Role: new  FormControl(),
  });

  constructor(private router: Router,  private route: ActivatedRoute, private authService: AuthService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit() {
  }
  onSubmit() {
    this.user.uid = this.id;
  }
}

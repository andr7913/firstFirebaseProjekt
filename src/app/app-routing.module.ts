import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {CreatUserComponent} from './user/creat-user/creat-user.component';
import {GetAllComponent} from './pages/get-all/get-all.component';
import {UpdateUserComponent} from './user/update-user/update-user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'creatUser', component: CreatUserComponent },
  { path: 'Get-All', component: GetAllComponent },
  { path: 'update-user/:id', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

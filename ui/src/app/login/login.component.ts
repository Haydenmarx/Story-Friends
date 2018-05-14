import { User } from './../types/User';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  users = this.usersService.users;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  addUser(username) {
    this.usersService.addNewUser(username).subscribe(users => this.getUsers());
  }

  updateCurrentUser(user) {
    this.usersService.updateCurrentUser(user);
  }

}

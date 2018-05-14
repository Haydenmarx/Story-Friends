import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UsersService, private route: ActivatedRoute) { }
  userid: number;
  username: string;
  bio: string;

  ngOnInit() {
    const user = this.userService.getCurrentUser();
    this.userid = user.id;
    this.username = user.username;
    this.bio = user.bio;
  }

  updateUserProfile(username, bio) {
    this.userService.updateUserProfile(this.userid, username, bio).subscribe(result => console.log(result));
  }

}

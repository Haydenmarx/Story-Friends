import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './types/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  bio: null = null;
  url = '/api/users';
  users: any;
  currentCharacter: User;

  getUsers() {
    const result = this.httpClient.get(this.url);
    result.subscribe(val => this.users = val);
    return result;
 }

  addNewUser(submitted: string) {
    const result = this.httpClient.post<User>(
      this.url,
      {
        username: submitted,
        bio: this.bio
      }
    );
    return result;
  }

  updateUserProfile(id, username, bio) {
    const result = this.httpClient.post<User>(
      this.url,
      {
        id: id,
        username: username,
        bio: bio
      }
    );
    return result;
  }

  deleteUser(userId) {
    this.httpClient.delete(this.url + '/' + userId).subscribe(val => {
      this.getUsers();
    });
  }


  updateCurrentUser(user) {
    this.currentCharacter = user;
  }

  getCurrentUser() {
    return this.currentCharacter;
  }

}

import { NavbarComponent } from './navbar/navbar.component';
import { Story } from './types/Story';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private httpClient: HttpClient) { }

  bio: null = null;
  url = '/api/stories';
  stories: any;

  getStories() {
    const result = this.httpClient.get(this.url);
    result.subscribe(val => this.stories = val);
    return result;
 }
}

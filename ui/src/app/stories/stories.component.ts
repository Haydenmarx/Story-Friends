import { StoriesService } from './../stories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private storiesService: StoriesService, private route: ActivatedRoute) { }
  stories: any;
  username: any;

  ngOnInit() {
    this.getStories();
    this.username = this.route.snapshot.paramMap.get('username');
  }

  getStories() {
    this.storiesService.getStories().subscribe(stories => this.stories = stories );
  }

}

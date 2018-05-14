package com.example.storiesapi.controllers;

import com.example.storiesapi.models.Story;
import com.example.storiesapi.repositories.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class StoriesController {

  @Autowired
  private StoryRepository storyRepository;

  @GetMapping("/")
  public Iterable<Story> findAllStories() {
    return storyRepository.findAll();
  }


  @DeleteMapping("/{userId}")
  public HttpStatus deleteStoriesById(@PathVariable Long userId) {
    storyRepository.delete(userId);
    return HttpStatus.OK;
  }

  @PostMapping("/")
  public Story createNewStory(@RequestBody Story newStory) {
    return storyRepository.save(newStory);
  }

}

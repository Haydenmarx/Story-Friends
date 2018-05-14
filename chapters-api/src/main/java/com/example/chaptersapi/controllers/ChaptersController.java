package com.example.chaptersapi.controllers;

import com.example.chaptersapi.models.Chapter;
import com.example.chaptersapi.repositories.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

@RestController
public class ChaptersController {
  @Autowired
  private ChapterRepository chapterRepository;

  @GetMapping("/")
  public Iterable<Chapter> findAllChapters() {
    return chapterRepository.findAll();
  }

  @DeleteMapping("/{chapterId}")
  public HttpStatus deleteChapterById(@PathVariable Long chapterId) {
    chapterRepository.delete(chapterId);
    return HttpStatus.OK;
  }
  /*

  STORY PAGE:
  select ID, TEXT, USERNAME from CHAPTERS inner join USERS on USER_ID = USERS.ID WHERE STORY_ID = ?;

  USER PAGE:
  select ID, TEXT, TITLE from CHAPTERS inner join STORIES on STORY_ID = STORIES.ID WHERE USER_ID = ?;

  ALSO DELETE
  STORY PAGE:
  delete * from CHAPTERS WHERE STORY_ID = ?;

  USER PAGE:
  delete * from CHAPTERS WHERE USER_ID = ?;




  create table CHAPTERS (
    ID serial primary key,
    TEXT varchar NOT NULL,
    STORY_ID integer references STORIES,
    USER_ID integer references USERS
);


  @Query("SELECT t FROM Todo t WHERE " +
   "LOWER(t.title) LIKE LOWER(CONCAT('%',:searchTerm, '%')) OR " +
   "LOWER(t.description) LIKE LOWER(CONCAT('%',:searchTerm, '%'))")
  List<Chapter> findBySearchTerm(@Param("searchTerm") String searchTerm);

  */


  @PostMapping("/")
  public Chapter createNewChapter(@RequestBody Chapter newChapter) {
    return chapterRepository.save(newChapter);
  }
}

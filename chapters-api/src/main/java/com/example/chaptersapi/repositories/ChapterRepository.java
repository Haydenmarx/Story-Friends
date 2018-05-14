package com.example.chaptersapi.repositories;

import com.example.chaptersapi.models.Chapter;
import org.springframework.data.repository.CrudRepository;

public interface ChapterRepository extends CrudRepository<Chapter, Long> {

}
package com.example.storiesapi.repositories;

import com.example.storiesapi.models.Story;
import org.springframework.data.repository.CrudRepository;

public interface StoryRepository extends CrudRepository<Story, Long> {

}
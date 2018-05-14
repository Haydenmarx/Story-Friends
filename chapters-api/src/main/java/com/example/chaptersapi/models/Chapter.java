package com.example.chaptersapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "CHAPTERS")
public class Chapter {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "TEXT")
  private String text;

  @Column(name = "STORY_ID")
  private Long story_id;

  @Column(name = "USER_ID")
  private Long user_id;
}

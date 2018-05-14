package com.example.chaptersapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ChaptersApiApplication {
  public static void main(String[] args) {
    SpringApplication.run(ChaptersApiApplication.class, args);
  }
}

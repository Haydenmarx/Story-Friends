import { UsersService } from './users.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './story/story.component';
import { ProfileComponent } from './profile/profile.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { StoriesService } from './stories.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoriesComponent,
    StoryComponent,
    ProfileComponent,
    FourOhFourComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    StoriesService
    // ChaptersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

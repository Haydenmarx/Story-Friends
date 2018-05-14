import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './story/story.component';
import { ProfileComponent } from './profile/profile.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  {
    path: ':username/stories',
    component: StoriesComponent
  },
  {
    path: ':username/story/:title',
    component: StoryComponent
  },
  {
    path: ':username/profile',
    component: ProfileComponent,
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: FourOhFourComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

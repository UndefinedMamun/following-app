import { GithubFollowersService } from './services/github-followers.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/appErrorHandler';
import { CoursesService } from './courses/courses.service';
import { CourseComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { OptionalInterpolationComponent } from './optional-interpolation/optional-interpolation.component';
import { FormatTextDirective } from './format-text.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveSignUpComponent } from './reactive-sign-up/reactive-sign-up.component';
import { TopicComponent } from './topic/topic.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { MyAnimationComponent } from './my-animation/my-animation.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AdminComponent,
    FavoriteComponent,
    PanelComponent,
    NgSwitchCaseComponent,
    NgIfElseComponent,
    NgForComponent,
    OptionalInterpolationComponent,
    FormatTextDirective,
    ContactFormComponent,
    ReactiveSignUpComponent,
    TopicComponent,
    PostComponent,
    MyAnimationComponent,
    NavbarComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "followers/:userid/:username", component: GithubProfileComponent },
      { path: "followers", component: GithubFollowersComponent },
      { path: "posts", component: PostComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GithubFollowersService,
    { provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

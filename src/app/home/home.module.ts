import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import {CarouselModule, WavesModule} from 'angular-bootstrap-md'
import {IvyCarouselModule} from "angular-responsive-carousel";
import {LandingComponent} from './landing/landing.component';
import {AboutPonddyComponent} from './about-ponddy/about-ponddy.component';
import {CourseComponent} from './course/course.component';
import {IntroComponent} from './intro/intro.component';
import {LearningComponent} from './learning/learning.component';
import {LazyLoadImageModule} from "ng-lazyload-image";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [HomeComponent, LandingComponent, AboutPonddyComponent, CourseComponent, IntroComponent, LearningComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    CarouselModule,
    WavesModule,
    IvyCarouselModule,
    RouterModule.forChild(routes),
    LazyLoadImageModule
  ],
  exports: [RouterModule, HomeComponent]
})
export class HomeModule {
}

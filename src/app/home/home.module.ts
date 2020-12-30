import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import {IvyCarouselModule} from "angular-responsive-carousel";
import { LandingComponent } from './landing/landing.component';
import { AboutPonddyComponent } from './about-ponddy/about-ponddy.component';
import { CourseComponent } from './course/course.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [HomeComponent, LandingComponent, AboutPonddyComponent, CourseComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    CarouselModule,
    WavesModule,
    IvyCarouselModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule, HomeComponent]
})
export class HomeModule {
}

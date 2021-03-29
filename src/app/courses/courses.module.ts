import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';

import { LandingComponent } from './landing/landing.component';
import { IntroCourseComponent } from './intro-course/intro-course.component';
import { MatCardModule } from '@angular/material/card';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule, Routes } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ShareModule } from 'src/components/share.module';
import { MatExpansionModule } from '@angular/material/expansion';

const routes: Routes = [
  {path: '', component: CoursesComponent},
];


@NgModule({
  declarations: [CoursesComponent, LandingComponent, IntroCourseComponent],
  imports: [
    CommonModule,
    ShareModule,
    MatCardModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
    IvyCarouselModule,
    MatExpansionModule
  ]
})
export class CoursesModule { }

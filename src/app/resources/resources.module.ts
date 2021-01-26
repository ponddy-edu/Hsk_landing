import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourcesComponent} from './resources.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import {LandingComponent} from './landing/landing.component';
import {TabComponent} from './tab/tab.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {MatTabsModule} from '@angular/material/tabs';
import { IntroCourseComponent } from './intro-course/intro-course.component';
import { AboutPonddyComponent } from './about-ponddy/about-ponddy.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { IntroPreparationComponent } from './intro-preparation/intro-preparation.component';
import { SmartLearnComponent } from './smart-learn/smart-learn.component';

const routes: Routes = [
  {path: 'resources', component: ResourcesComponent},
];

@NgModule({
  declarations: [ResourcesComponent, LandingComponent, TabComponent, IntroCourseComponent, AboutPonddyComponent, IntroPreparationComponent, SmartLearnComponent],
  imports: [
    CommonModule,
    ShareModule,
    MatTabsModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
    IvyCarouselModule,
  ]
})
export class ResourcesModule {
}

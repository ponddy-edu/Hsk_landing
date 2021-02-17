import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourcesComponent} from './resources.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import {LandingComponent} from './landing/landing.component';
import {TabComponent} from './tab/tab.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {MatTabsModule} from '@angular/material/tabs';
import {IntroCourseComponent} from './intro-course/intro-course.component';
import {AboutPonddyComponent} from './about-ponddy/about-ponddy.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {IntroPreparationComponent} from './intro-preparation/intro-preparation.component';
import {DownloadComponent} from './download/download.component';

import {SmartLearnComponent} from './smart-learn/smart-learn.component';
import {LayoutModule} from '@angular/cdk/layout';
import { IntroSmartComponent } from './intro-smart/intro-smart.component';


const routes: Routes = [
  {
    path: '', component: ResourcesComponent,
    children: [{path: 'course', component: ResourcesComponent, data: {tab: 0}},
      {path: 'preparation', component: ResourcesComponent, data: {tab: 1}},
      {path: 'smart', component: ResourcesComponent, data: {tab: 2}},
      {path: 'download', component: ResourcesComponent, data: {tab: 3}}]
  },
];

@NgModule({
  declarations: [ResourcesComponent, LandingComponent, TabComponent, IntroCourseComponent, AboutPonddyComponent, IntroPreparationComponent, DownloadComponent, SmartLearnComponent, IntroSmartComponent],
  imports: [
    CommonModule,
    ShareModule,
    MatTabsModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
    IvyCarouselModule,
    LayoutModule,
  ]
})
export class ResourcesModule {
}

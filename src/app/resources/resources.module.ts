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


const routes: Routes = [
  {path: 'resources', component: ResourcesComponent},
];

@NgModule({
  declarations: [ResourcesComponent, LandingComponent, TabComponent, IntroCourseComponent],
  imports: [
    CommonModule,
    ShareModule,
    MatTabsModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
  ]
})
export class ResourcesModule {
}

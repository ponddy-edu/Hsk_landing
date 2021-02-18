import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import {LandingComponent} from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import { NgxPageScrollModule } from 'ngx-page-scroll';

const routes: Routes = [
  {path: '', component: FaqComponent},
];
@NgModule({
  declarations: [FaqComponent, LandingComponent, AboutComponent],
  imports: [
    CommonModule,
    ShareModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
    NgxPageScrollModule,
  ]
})
export class FaqModule { }

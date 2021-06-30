import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing/landing.component';
import {IntroChineseComponent} from './intro-chinese/intro-chinese.component';
import {IntroTestComponent} from './intro-test/intro-test.component';
import {ShareModule} from '../../components/share.module';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test.component';
import {TabComponent} from './tab/tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { IntroEnrollComponent } from './intro-enroll/intro-enroll.component';

const routes: Routes = [
  {path: '', redirectTo: 'chinese', pathMatch: 'full'},
  {path: 'chinese', component: TestComponent, data: {tab: 0}},
  {path: 'instructions/:id', component: TestComponent, data: {tab: 1}},
  {path: 'enroll', component: TestComponent, data: {tab: 2}}
];


@NgModule({
  declarations: [TestComponent, LandingComponent, IntroChineseComponent, IntroTestComponent, TabComponent, IntroEnrollComponent],
  imports: [
    CommonModule,
    ShareModule,
    LazyLoadImageModule,
    MatTabsModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    NgxPageScrollModule,
  ]
})
export class TestModule {
}

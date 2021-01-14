import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { IntroChineseComponent } from './intro-chinese/intro-chinese.component';
import { IntroTestComponent } from './intro-test/intro-test.component';
import {ShareModule} from '../../components/share.module';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
];

@NgModule({
  declarations: [TestComponent, LandingComponent, IntroChineseComponent, IntroTestComponent],
  imports: [
    CommonModule,
    ShareModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
  ]
})
export class TestModule { }

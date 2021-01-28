import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import {LandingComponent} from './landing/landing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'faq', component: FaqComponent},
];
@NgModule({
  declarations: [FaqComponent, LandingComponent, AboutComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
  ]
})
export class FaqModule { }

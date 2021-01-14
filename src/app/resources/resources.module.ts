import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourcesComponent} from './resources.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import {LandingComponent} from './landing/landing.component';
// import {AboutPonddyComponent} from './about-ponddy/about-ponddy.component';
// import {ProductComponent} from './product/product.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {path: 'resources', component: ResourcesComponent},
];

@NgModule({
  declarations: [ResourcesComponent, LandingComponent],
  imports: [
    CommonModule,
    ShareModule,
    MatCardModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
    IvyCarouselModule
  ]
})
export class ResourcesModule { }

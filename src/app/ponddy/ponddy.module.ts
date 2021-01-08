import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PonddyComponent} from './ponddy.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import { LandingComponent } from './landing/landing.component';
import { AboutHSKComponent } from './about-hsk/about-hsk.component';
import { AboutPonddyComponent } from './about-ponddy/about-ponddy.component';
import { ProductComponent } from './product/product.component';
import {LazyLoadImageModule} from "ng-lazyload-image";
import {IvyCarouselModule} from "angular-responsive-carousel";

const routes: Routes = [
  {path: 'ponddy', component: PonddyComponent},
];

@NgModule({
  declarations: [PonddyComponent, LandingComponent, AboutHSKComponent, AboutPonddyComponent, ProductComponent],
  imports: [
    CommonModule,
    ShareModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes),
    IvyCarouselModule
  ]
})
export class PonddyModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {LearnMoreComponent} from './learn-more/learn-more.component';
import {AboutPonddyComponent} from './about-ponddy/about-ponddy.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, LearnMoreComponent, AboutPonddyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    LazyLoadImageModule,
    IvyCarouselModule,

  ],
  exports: [HeaderComponent, FooterComponent, AboutPonddyComponent]
})
export class ShareModule {
}

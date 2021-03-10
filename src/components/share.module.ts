import {LoginComponent} from './login/login.component';
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
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {DateCounterComponent} from './date-counter/date-counter.component';
import {PaySuccessComponent} from './pay-success/pay-success.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LearnMoreComponent,
    AboutPonddyComponent, LoginComponent, DateCounterComponent, PaySuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    LazyLoadImageModule,
    IvyCarouselModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  entryComponents: [
    LoginComponent, PaySuccessComponent
  ],
  exports: [HeaderComponent, FooterComponent, AboutPonddyComponent,
    LoginComponent, DateCounterComponent]
})
export class ShareModule {
}

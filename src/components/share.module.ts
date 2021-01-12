import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { LearnMoreComponent } from './learn-more/learn-more.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, LearnMoreComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,

  ],
  exports: [HeaderComponent, FooterComponent]
})
export class ShareModule {
}

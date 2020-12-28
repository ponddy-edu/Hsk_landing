import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [HomeComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule, HomeComponent]
})
export class HomeModule {
}

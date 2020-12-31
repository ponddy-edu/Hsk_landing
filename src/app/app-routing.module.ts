import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeModule} from './home/home.module';
import {PonddyModule} from "./ponddy/ponddy.module";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'ponddy', loadChildren: './ponddy/ponddy.module#PonddyModule'}
  // { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }),
    HomeModule,
    PonddyModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

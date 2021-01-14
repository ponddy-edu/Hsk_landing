import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {PonddyModule} from './ponddy/ponddy.module';
import {ResourcesModule} from './resources/resources.module';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'ponddy', loadChildren: './ponddy/ponddy.module#PonddyModule'},
  { path: 'resources', loadChildren: './resources/resources.module#ResourcesModule'},
  {path: 'test', loadChildren: './test/test.module#TestModule'}

  // { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    HomeModule,
    PonddyModule,
    ResourcesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

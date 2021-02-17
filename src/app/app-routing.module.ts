import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {PonddyModule} from './ponddy/ponddy.module';
import {ResourcesModule} from './resources/resources.module';
import {TestModule} from './test/test.module';
import {FaqModule} from './faq/faq.module'
import {environment} from '../environments/environment';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: {
      seo: {
        title: 'Ponddy® HSK - Home',
        metaTags: [
          { name: 'description', content: 'Ponddy® HSK is the first online HSK test center in the U.S.A. that offers at-home online testing services for HSK, HSKK, YCT, and BCT official Chinese language tests.'},
          { property: 'og:title', content: 'Ponddy® HSK - Home' },
          { property: 'og:description', content: 'Ponddy® HSK is the first online HSK test center in the U.S.A. that offers at-home online testing services for HSK, HSKK, YCT, and BCT official Chinese language tests.' },
          { property: 'og:image', content: environment.appUrl + 'assets/image/homepage.png' },
          { property: 'og:url', content: environment.appUrl + 'home' },
        ]
      }
    }
    },
  {path: 'ponddy', loadChildren: './ponddy/ponddy.module#PonddyModule', data: {
      seo: {
        title: 'Ponddy® HSK - About Ponddy',
        metaTags: [
          { name: 'description', content: 'Ponddy® is an advanced AI smart learning brand. Powered by innovative AKLS® AI technology, Ponddy’s smart learning solutions include intelligent platforms, customized resources, tailored curricula, on-line tutors, and at-home online testing services.'},
          { property: 'og:title', content: 'Ponddy® HSK - Ponddy' },
          { property: 'og:description', content: 'Ponddy® is an advanced AI smart learning brand. Powered by innovative AKLS® AI technology, Ponddy’s smart learning solutions include intelligent platforms, customized resources, tailored curricula, on-line tutors, and at-home online testing services.' },
          { property: 'og:image', content: environment.appUrl + 'assets/image/homepage.png' },
          { property: 'og:url', content: environment.appUrl + 'ponddy' },
        ]
      }
    }},
  {path: 'resources', loadChildren: './resources/resources.module#ResourcesModule',
    data: {
      seo: {
        title: 'Ponddy® HSK - Resources',
        metaTags: [
          { name: 'description', content: 'Ponddy® HSK provides online HSK courses, HSK self-study guide and smart tools which helps building robust language knowleage and improve the learning experience along the way.'},
          { property: 'og:title', content: 'Ponddy® HSK - Resources' },
          { property: 'og:description', content: 'Ponddy® HSK provides online HSK courses, HSK self-study guide and smart tools which helps building robust language knowleage and improve the learning experience along the way.' },
          { property: 'og:image', content: environment.appUrl + 'assets/image/homepage.png' },
          { property: 'og:url', content: environment.appUrl + 'resources' },
        ]
      }
    }},
  {path: 'tests', loadChildren: './test/test.module#TestModule',
    data: {
      seo: {
        title: 'Ponddy® HSK - Tests',
        metaTags: [
          { name: 'description', content: 'Ponddy® HSK provides Chinese proficiency tests including HSK, HSKK, YCT and BCT. Please refer to the detailed introduction pages.'},
          { property: 'og:title', content: 'Ponddy® HSK - Tests' },
          { property: 'og:description', content: 'Ponddy® HSK provides Chinese proficiency tests including HSK, HSKK, YCT and BCT. Please refer to the detailed introduction pages.' },
          { property: 'og:image', content: environment.appUrl + 'assets/image/homepage.png' },
          { property: 'og:url', content: environment.appUrl + 'tests' },
        ]
      }
    }},
  {path: 'faq', loadChildren: './faq/faq.module#FaqModule',
    data: {
      seo: {
        title: 'Ponddy® HSK - FAQ',
        metaTags: [
          { name: 'description', content: 'If you have any questions about the HSK tests, HSK courses, account registration, payments and refunds, please refer to the detailed FAQs page.'},
          { property: 'og:title', content: 'Ponddy® HSK - FAQ' },
          { property: 'og:description', content: 'If you have any questions about the HSK tests, HSK courses, account registration, payments and refunds, please refer to the detailed FAQs page.' },
          { property: 'og:image', content: environment.appUrl + 'assets/image/homepage.png' },
          { property: 'og:url', content: environment.appUrl + 'faq' },
        ]
      }
    }}

  // { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
    HomeModule,
    PonddyModule,
    TestModule,
    ResourcesModule,
    FaqModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

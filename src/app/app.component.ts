import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {Meta} from "@angular/platform-browser";
import {DeviceService} from "../utils/device.service";
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {SeoService} from '../utils/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hsk-landing';
  platform: string;

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              private metaService: Meta,
              public device: DeviceService,
              private router: Router,
              private seoService: SeoService,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.platform = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server';
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe((data: any) => {
      const seoData = data.seo;
      this.seoService.updateTitle(seoData.title);
      this.seoService.updateMetaTags(seoData.metaTags);
      // this.metaService.updateTag()
    });
  }
}

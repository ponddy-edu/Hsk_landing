import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hsk-landing';
  platform: string;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  public ngOnInit(): void {
    this.platform = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server';
    console.log(this.platform)
  }
}

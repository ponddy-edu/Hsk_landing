import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {Meta} from "@angular/platform-browser";
import {DeviceService} from "../utils/device.service";

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
              public device: DeviceService) {
  }

  public ngOnInit(): void {
    this.platform = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server';
    console.log(this.platform)
    this.metaService.addTags([
      {
        name: 'keywords',
        content: 'learning, education, ai, chinese, mandarin, tutors, reader, ponddy, in few minutes, quickly learn, study, self-study, online'
      },
      {
        name: 'description',
        content: 'Ponddy Reader instantly transforms authentic materials into online Chinese lessons. With a library of 800+ smart lessons (pondlets) and AI-assisted learning tools, Ponddy Reader is perfect for both teaching and self-learning.'
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'copyright', content: 'Ponddy Education Inc'},
      {name: 'author', content: 'Ponddy Education Inc'},
      {name: 'classification', content: 'learning, chinese'}
    ]);

  }
}

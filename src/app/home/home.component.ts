import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'angular-responsive-carousel';
import {SheetService} from '../../utils/sheet.service';
import {DeviceService} from "../../utils/device.service";
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public device: DeviceService,
              @Inject(DOCUMENT) private document: any,
              private pageScrollService: PageScrollService) {
  }

  ngOnInit(): void {
    // this.sheetService.addRow()
    setTimeout(() => {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '#landing_home',
        duration: 500,
      });
    }, 100)
  }


}

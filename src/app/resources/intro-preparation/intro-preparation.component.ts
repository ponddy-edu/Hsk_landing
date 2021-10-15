import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CarouselComponent} from "angular-responsive-carousel";
import {DeviceService} from "../../../utils/device.service";

@Component({
  selector: 'app-intro-preparation',
  templateUrl: './intro-preparation.component.html',
  styleUrls: ['./intro-preparation.component.scss']
})
export class IntroPreparationComponent implements OnInit {
  pic01 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_01_phone.svg 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_01.svg 1100w`
  pic02 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_02_phone.svg 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_02.svg 1100w`
  pic03 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_03_phone.svg 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_03.svg 1100w`
  pic04 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_04.svg 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_04.svg 1100w`
  pic05 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_05.gif 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_05.gif 1100w`
  pic06 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_06.gif 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_06.gif 1100w`
  pic07 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_07_phone.svg 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_07.svg 1100w`
  pic08 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_08_phone.svg 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_08.svg 1100w`
  pic09 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_09_phone.svg 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_09.svg 1100w`
  pic10 = `https://d1442rljwt9063.cloudfront.net/resources/preparation/mobile/pic_10_phone.svg 767w,
  https://d1442rljwt9063.cloudfront.net/resources/preparation/web/pic_10.svg 1100w`

  mobile = true
  web = false
  courseCarousel: CarouselComponent;
  courseWidth: number
  courseHeight: number
  @Output()
  downloadChange = new EventEmitter<boolean>()

  constructor(public device: DeviceService) {
    if (device.$mobile.getValue()) {
      this.courseWidth = 240
      this.courseHeight = 550
      this.mobile = true
      this.web = false
    } else {
      this.courseHeight = 600
      this.courseWidth = 500
      this.mobile = false
      this.web = true
    }
  }
  ngOnInit() {
  }

  changeDownload() {
    this.downloadChange.emit(true)
  }

}

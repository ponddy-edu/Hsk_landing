import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../utils/device.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-intro-smart',
  templateUrl: './intro-smart.component.html',
  styleUrls: ['./intro-smart.component.scss']
})
export class IntroSmartComponent implements OnInit {
  picDailyWord = `https://d1442rljwt9063.cloudfront.net/resources/smart/mobile/pic_dailyWord_phone.png 767w,
  https://d1442rljwt9063.cloudfront.net/resources/smart/web/pic_dailyWord.png 1100w`
  picDigestWord = `https://d1442rljwt9063.cloudfront.net/resources/smart/mobile/pic_digest_phone.png 767w,
  https://d1442rljwt9063.cloudfront.net/resources/smart/web/pic_digest.png 1100w`


  mobile = true
  web = false

  screenWidth = 900
  widthSubscribe: Subscription
  constructor(public device: DeviceService) {
    this.widthSubscribe = device.$screenWidth
      .subscribe(width => this.screenWidth = width)

      if (device.$mobile.getValue()) {
        this.mobile = true
        this.web = false
      } else {
        this.mobile = false
        this.web = true
      }
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.widthSubscribe.unsubscribe()
  }
}

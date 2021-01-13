import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from '../../../utils/device.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  screenWidth = 900
  widthSubscribe: Subscription
  tutorsPic = `https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/tutors_pic_phone.png 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/tutors_pic_web.png 1100w`
  readerPic = `https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/reader_pic_phone.png 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/reader_pic_web.png 1100w`
  smartTextbookPic = `https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/smartTextbook_pic_web.png 1100w,
            https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/smartTextbook_pic_phone.png 767w`
  constructor(public device: DeviceService) {
    this.widthSubscribe = device.$screenWidth
      .subscribe(width => this.screenWidth = width)
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.widthSubscribe.unsubscribe()
  }
}

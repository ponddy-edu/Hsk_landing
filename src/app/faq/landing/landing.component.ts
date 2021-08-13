import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/utils/device.service';

const imageList = ['https://hsk-landing.s3-us-west-2.amazonaws.com/faq/web/index_pic_web.png']
const imagmeListMobile = ['https://hsk-landing.s3-us-west-2.amazonaws.com/faq/mobile/index_pic_phone.png']

const imageList_small = ['https://hsk-landing.s3.us-west-2.amazonaws.com/faq/web/index_pic_web_small.png']
const imagmeListMobile_small = ['https://hsk-landing.s3.us-west-2.amazonaws.com/faq/mobile/index_pic_phone_small.png']

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  carouselImageList: any[]
  carouselImageList_small: any[]

  constructor(public device: DeviceService) {
    this.device.$mobile.subscribe(isMobile => {
      console.log(isMobile)
      if (isMobile) {
        this.carouselImageList = imagmeListMobile
        this.carouselImageList_small = imagmeListMobile_small
      } else {
        this.carouselImageList = imageList
        this.carouselImageList_small = imageList_small
      }
    })
  }

  ngOnInit(): void {
  }
  smoothScroll() {
    window.scroll({
      top: window.innerHeight - 65,
      left: 0,
      behavior: 'smooth'
    });
  }
}

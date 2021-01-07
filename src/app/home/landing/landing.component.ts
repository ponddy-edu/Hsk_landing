import {Component, OnInit} from '@angular/core';
import {DeviceService} from "../../../utils/device.service";

const imageList = ['https://hsk-landing.s3-us-west-2.amazonaws.com/home/index_pic_01.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/index_pic_02.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/index_pic_03.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/index_pic_04.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/index_pic_05.png',
]
const imagmeListMobile = ['https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/index_pic_01_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/index_pic_02_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/index_pic_03_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/index_pic_04_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/index_pic_05_phone.png',
]

@Component({
  selector: 'app-home-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  carouselImageList: any[]


  constructor(public device: DeviceService) {
    this.device.mobile.subscribe(isMobile => {
      console.log(isMobile)
      if (isMobile) {
        this.carouselImageList = imagmeListMobile
      } else {
        this.carouselImageList = imageList

      }
    })


  }

  ngOnInit(): void {
  }

}

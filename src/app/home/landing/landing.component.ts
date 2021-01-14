import {Component, OnInit} from '@angular/core';
import {DeviceService} from "../../../utils/device.service";
import home from '@iconify/icons-mdi/home';
import arrowDownCircle from '@iconify/icons-mdi/arrow-down-circle'
// import home from '@iconify/icons-mdi/arrow';
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
  homeIcon = home;
  arrowDownCircle = arrowDownCircle

  constructor(public device: DeviceService) {
    this.device.$mobile.subscribe(isMobile => {
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

  smoothScroll() {
    console.log('scroll')
    window.scroll({
      top: window.innerHeight - 65,
      left: 0,
      behavior: 'smooth'
    });
  }
}

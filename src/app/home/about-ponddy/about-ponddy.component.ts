import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'angular-responsive-carousel';
import {DeviceService} from "../../../utils/device.service";


const imageList = ['https://hsk-landing.s3-us-west-2.amazonaws.com/home/logo_2_web.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/logo_1_web.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/logo_3_web.png',
]
const imagmeListMobile = ['https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_1_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_2_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_3_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_4_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_5_phone.png',
]
@Component({
  selector: 'app-home-about',
  templateUrl: './about-ponddy.component.html',
  styleUrls: ['./about-ponddy.component.scss']
})
export class AboutPonddyComponent implements OnInit {
  @ViewChild('course_carousel')
  courseComponent: CarouselComponent;


  carouselImageList: any[]

  constructor(public device: DeviceService) {

    this.device.$mobile.subscribe(isMobile => {
      if (isMobile) {
        this.carouselImageList = imagmeListMobile
      } else {
        this.carouselImageList = imageList
      }
    })
  }

  ngOnInit(): void {
  }

  coursePrev(): void {
    this.courseComponent.prev()
  }

  courseNext(): void {
    this.courseComponent.next()
  }
}

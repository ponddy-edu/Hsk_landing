import {Component, OnInit, ViewChild} from '@angular/core';
import {DeviceService} from '../../../utils/device.service';
import {CarouselComponent} from 'angular-responsive-carousel';

const imageList = ['https://d1442rljwt9063.cloudfront.net/ponddy/logo_1.png',
  'https://d1442rljwt9063.cloudfront.net/ponddy/logo_2.png',
  'https://d1442rljwt9063.cloudfront.net/ponddy/logo_3.png',
]
const imagmeListMobile = ['https://d1442rljwt9063.cloudfront.net/ponddy/mobile/logo_1_phone.png',
  'https://d1442rljwt9063.cloudfront.net/ponddy/mobile/logo_2_phone.png',
  'https://d1442rljwt9063.cloudfront.net/ponddy/mobile/logo_3_phone.png',
  'https://d1442rljwt9063.cloudfront.net/ponddy/mobile/logo_4_phone.png',
  'https://d1442rljwt9063.cloudfront.net/ponddy/mobile/logo_5_phone.png',
]
@Component({
  selector: 'app-about-ponddy',
  templateUrl: './about-ponddy.component.html',
  styleUrls: ['./about-ponddy.component.scss']
})
export class AboutPonddyComponent implements OnInit {
  @ViewChild('course_carousel')
  courseComponent: CarouselComponent;

  carouselImageList: any[]
  carouselHeight: number

  constructor(public device: DeviceService) {
    if (this.device.$mobile.getValue()) {
      this.carouselImageList = imagmeListMobile;
      this.carouselHeight = 72
    } else {
      this.carouselImageList = imageList
      this.carouselHeight = 92
    }
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

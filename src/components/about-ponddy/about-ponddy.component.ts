import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'angular-responsive-carousel';
import {DeviceService} from '../../utils/device.service';


const imageListBlue = ['https://hsk-landing.s3-us-west-2.amazonaws.com/home/logo_2_web.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/logo_1_web.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/logo_3_web.png',
]
const imagmeListMobileBlue = ['https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_1_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_2_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_3_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_4_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/logo_5_phone.png',
]

const imageListOrange = ['https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/logo_1.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/logo_2.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/logo_3.png',
]
const imagmeListMobileOrange = ['https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/logo_1_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/logo_2_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/logo_3_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/logo_4_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/logo_5_phone.png',
  'https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/logo_6_phone.png',
]


@Component({
  selector: 'app-share-about-ponddy',
  templateUrl: './about-ponddy.component.html',
  styleUrls: ['./about-ponddy.component.scss']
})
export class AboutPonddyComponent implements OnInit {
  @Input()
  descriptionSection2 = true

  @Input()
  colorStyle = 'orange' //blue

  colorClass = ''
  buttonImage = ''
  colorBg = ''
  colClass = ''
  disableClass = 'left'

  height = 101

  @ViewChild('course_carousel')
  courseComponent: CarouselComponent;


  carouselImageList: any[]

  constructor(public device: DeviceService) {
  }

  ngOnInit(): void {
    if (this.colorStyle === 'orange') {
      this.colorClass = 'orange_text'
      this.buttonImage = '/assets/image/icon/btn_orange_normal.svg'
      this.colorBg = '#F5F0EB'
      this.colClass = 'col-md-8'
    } else {
      this.colorClass = 'blue_text'
      this.buttonImage = '/assets/image/icon/btn_blue_normal.svg'
      this.colorBg = '#EBF2F5'
      this.colClass = 'col-md-9'
    }
    this.device.$mobile.subscribe(isMobile => {
      if (isMobile) {
        if (this.colorStyle === 'orange') {
          this.carouselImageList = imagmeListMobileOrange
        } else {
          this.carouselImageList = imagmeListMobileBlue
        }
      } else {
        if (this.colorStyle === 'orange') {
          this.carouselImageList = imageListOrange
        } else {
          this.carouselImageList = imageListBlue
        }
      }
    })

  }

  coursePrev(): void {
    let disableImg = this.courseComponent.counter.split('/')
    this.courseComponent.prev()
    if (Number.parseInt(disableImg[0]) === 2) {
      this.disableClass = "left"
    } else {
      this.disableClass = ''

    }
  }

  courseNext(): void {
    let disableImg = this.courseComponent.counter.split('/')
    this.courseComponent.next()
    if (Number.parseInt(disableImg[0]) === Number.parseInt(disableImg[1]) - 1) {
      this.disableClass = "right"
    } else {
      this.disableClass = ''

    }
  }
}

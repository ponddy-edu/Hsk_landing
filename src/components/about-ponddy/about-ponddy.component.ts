import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'angular-responsive-carousel';
import {DeviceService} from '../../utils/device.service';


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
  selector: 'app-share-about-ponddy',
  templateUrl: './about-ponddy.component.html',
  styleUrls: ['./about-ponddy.component.scss']
})
export class AboutPonddyComponent implements OnInit {
  @Input()
  descriptionSection2 = true

  @Input()
  colorStyle = 'orange' //blue

  ColorClass = ''
  ButtonImage = ''
  ColorBg = ''



  height = 101

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
    console.log(this.colorStyle)
    if(this.colorStyle === 'orange'){
      this.ColorClass = 'orange_text'
      this.ButtonImage = '/assets/image/icon/btn_orange_normal.svg'
      this.ColorBg = '#F5F0EB'
    } else {
      this.ColorClass = 'blue_text'
      this.ButtonImage = '/assets/image/icon/btn_blue_normal.svg'
      this.ColorBg = '#EBF2F5'
    }
  }

  coursePrev(): void {
    this.courseComponent.prev()
  }

  courseNext(): void {
    this.courseComponent.next()
  }
}

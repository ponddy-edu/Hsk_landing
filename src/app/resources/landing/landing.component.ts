import {Component, Input, OnInit} from '@angular/core';
import { DeviceService } from 'src/utils/device.service';

const imageList = ['https://hsk-landing.s3-us-west-2.amazonaws.com/resources/index_pic_web-preparation.png',
                   'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/smart/web/index_pic_web.png',
                   'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/download/prepare_test_pic.png',
                  ]
const imagmeListMobile = ['https://hsk-landing.s3-us-west-2.amazonaws.com/resources/preparation/mobile/index_pic_phone.png',
                          'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/smart/mobile/index_pic_phone.png',
                          'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/download/prepare_test_pic_phone.png'
                         ]

const imageList_small = ['/assets/image/resources/index_pic_web-preparation_small.png',
                        '/assets/image/resources/index_pic_web-ai_small.png',
                        '/assets/image/resources/prepare_test_pic_small.png'
                      ]
const imagmeListMobile_small = ['/assets/image/resources/index_pic_web-preparation_phone_small.png',
                              '/assets/image/resources/index_pic_web-ai__phone_small.png',
                              '/assets/image/resources/prepare_test_pic_phone_small.png'
                            ]

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Input()
  tab: number

  backgrond = 'url("https://hsk-landing.s3-us-west-2.amazonaws.com/resources/Course+/index_pic_web.png")'
  background2 = 'url("https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/59291481_s.png")'
  background3 = 'url("https://hsk-landing.s3-us-west-2.amazonaws.com/test/web/index_01.png")'

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

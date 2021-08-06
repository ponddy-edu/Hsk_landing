import {Component, Input, OnInit} from '@angular/core';
import { DeviceService } from 'src/utils/device.service';
const imageList = ['https://hsk-landing.s3-us-west-2.amazonaws.com/test/web/pic_HSK_Test_index1.png',
                   'https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/web/index_pic_web.png',
                   'https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/web/index_pic_web.png',
                  ]
const imagmeListMobile = ['https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/mobile/pic_HSK_Test_index1.png',
                          'https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/mobile/index_pic_phone.png',
                          'https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/mobile/index_pic_phone.png'
                         ]

const imageList_small = ['https://hsk-landing.s3.us-west-2.amazonaws.com/test/web/pic_HSK_Test_index1_small.png',
                        'https://hsk-landing.s3.us-west-2.amazonaws.com/test/web/index_pic_web_small.png',
                        'https://hsk-landing.s3.us-west-2.amazonaws.com/test/web/index_pic_web_small.png'
                      ]
const imagmeListMobile_small = ['https://hsk-landing.s3.us-west-2.amazonaws.com/test/web/mobile/pic_HSK_Test_index1_phone_small.png',
                              'https://hsk-landing.s3.us-west-2.amazonaws.com/test/web/mobile/index_pic_phone_small.png',
                              'https://hsk-landing.s3.us-west-2.amazonaws.com/test/web/mobile/index_pic_phone_small.png'
                            ]

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Input()
  tab: number

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

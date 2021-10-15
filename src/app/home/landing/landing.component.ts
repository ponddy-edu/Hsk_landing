import {Component, OnInit} from '@angular/core';
import {DeviceService} from "../../../utils/device.service";
import home from '@iconify/icons-mdi/home';
import arrowDownCircle from '@iconify/icons-mdi/arrow-down-circle'
import play from '@iconify/icons-mdi/play-circle'
// import home from '@iconify/icons-mdi/arrow';
const imageList = ['https://d1442rljwt9063.cloudfront.net/home/index_pic_01.png',
  'https://d1442rljwt9063.cloudfront.net/home/index_pic_02.png',
  'https://d1442rljwt9063.cloudfront.net/home/index_pic_03.png',
  'https://d1442rljwt9063.cloudfront.net/home/index_pic_04.png',
  'https://d1442rljwt9063.cloudfront.net/home/index_pic_05.png',
]
const imagmeListMobile = ['https://d1442rljwt9063.cloudfront.net/home/mobile/index_pic_01_phone.png',
  'https://d1442rljwt9063.cloudfront.net/home/mobile/index_pic_02_phone.png',
  'https://d1442rljwt9063.cloudfront.net/home/mobile/index_pic_03_phone.png',
  'https://d1442rljwt9063.cloudfront.net/home/mobile/index_pic_04_phone.png',
  'https://d1442rljwt9063.cloudfront.net/home/mobile/index_pic_05_phone.png',
]

const imageList_small = ['https://d1442rljwt9063.cloudfront.net/home/index_pic_01_small.png',
                        'https://d1442rljwt9063.cloudfront.net/home/index_pic_01_small.png',
                        'https://d1442rljwt9063.cloudfront.net/home/index_pic_01_small.png',
                        'https://d1442rljwt9063.cloudfront.net/home/index_pic_01_small.png',
                        'https://d1442rljwt9063.cloudfront.net/home/index_pic_01_small.png'
                      ]
const imagmeListMobile_small = ['https://d1442rljwt9063.cloudfront.net/home/index_pic_01_phone_small.png',
                        'https://d1442rljwt9063.cloudfront.net/home/index_pic_02_phone_small.png',
                        'https://d1442rljwt9063.cloudfront.net/home/index_pic_03_phone_small.png',
                        'https://d1442rljwt9063.cloudfront.net/home/index_pic_04_phone_small.png',
                        'https://d1442rljwt9063.cloudfront.net/home/index_pic_05_phone_small.png'
                      ]

@Component({
  selector: 'app-home-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  homeIcon = home;
  playIcon = play;
  arrowDownCircle = arrowDownCircle

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
    console.log('scroll')
    window.scroll({
      top: window.innerHeight - 65,
      left: 0,
      behavior: 'smooth'
    });
  }
}

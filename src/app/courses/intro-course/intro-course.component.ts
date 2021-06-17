import {DeviceService} from './../../../utils/device.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro-course',
  templateUrl: './intro-course.component.html',
  styleUrls: ['./intro-course.component.scss']
})
export class IntroCourseComponent implements OnInit {
  mobile = true
  web = false
  courseWidth: number
  courseHeight: number

  constructor(public device: DeviceService) {
    if (device.$mobile.getValue()) {
      this.courseWidth = 240
      this.courseHeight = 550
      this.mobile = true
      this.web = false
    } else {
      this.courseHeight = 600
      this.courseWidth = 500
      this.mobile = false
      this.web = true
    }
  }

  pic_HSK12 = {
    mobile: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK12_p.png',
    web: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK12_w.png'
  }
  pic_HSK3 = {
    mobile: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK3_p.png',
    web: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK3_w.png'
  }
  pic_HSK4 = {
    mobile: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK4_p.png',
    web: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK4_w.png'
  }
  pic_HSK4plus = {
    mobile: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK4plus_p.png',
    web: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK4plus_w.png'
  }


  table_HSK12 = {
    web: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web/table_HSK12_w_01.svg',
    mobile: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile/table_HSK12_p_01.svg',
    webBottom: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web/table_HSK12_w_02.svg',
    mobileBottom: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile/table_HSK12_p_02.svg',
  }
  table_HSK3 = {
    web: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web/table_HSK3_w_01.svg',
    mobile: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile/table_HSK3_p_01.svg',
    webBottom: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web/table_HSK3_w_02.svg',
    mobileBottom: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile/table_HSK3_p_02.svg',
  }
  table_HSK4 = {
    web: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web/table_HSK4_w_01.svg',
    mobile: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile/table_HSK4_p_01.svg',
    webBottom: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web/table_HSK4_w_02.svg',
    mobileBottom: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile/table_HSK4_p_02.svg',
  }
  table_HSK4plus = {
    mobile: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/table_HSK4plus_p.svg',
    web: 'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/table_HSK4plus_w.svg'
  }

  ngOnInit(): void {
  }

  tabItem = 'hsk12'
  panelOpenState = false;

  checkTab(tabItem: string) {
    this.tabItem = 'hsk' + tabItem
  }
}

import { DeviceService } from './../../../utils/device.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-course',
  templateUrl: './intro-course.component.html',
  styleUrls: ['./intro-course.component.scss']
})
export class IntroCourseComponent implements OnInit {

  constructor(public device:DeviceService) { }
  pic_HSK12 = {mobile:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK12_p.png',
  web:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK12_w.png'}
  pic_HSK3 = {mobile:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK3_p.png',
  web:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK3_w.png'}
  pic_HSK4 = {mobile:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK4_p.png',
  web:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK4_w.png'}
  pic_HSK4plus = {mobile:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK4plus_p.png',
  web:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK4plus_w.png'}


  table_HSK12 = {mobile:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/table_HSK12_p.svg',
  web:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/table_HSK12_w.svg'}
  table_HSK3 = {mobile:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/table_HSK3_p.svg',
  web:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/table_HSK3_w.svg'}
  table_HSK4 = {mobile:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/table_HSK4_p.svg',
  web:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/table_HSK4_w.svg'}
  table_HSK4plus = {mobile:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/table_HSK4plus_p.svg',
  web:'https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/table_HSK4plus_w.svg'}

  ngOnInit(): void {
  }

  tabItem = 'hsk12'
  panelOpenState = false;

  checkTab(tabItem: string) {
    this.tabItem = 'hsk' + tabItem
  }
}

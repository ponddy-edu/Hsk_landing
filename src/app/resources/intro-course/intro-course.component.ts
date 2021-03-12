import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-course',
  templateUrl: './intro-course.component.html',
  styleUrls: ['./intro-course.component.scss']
})
export class IntroCourseComponent implements OnInit {

  constructor() { }
  pic_HSK12 = `https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK12_p.png 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK12_w.png 1100w`
  pic_HSK3 = `https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK3_p.png 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK3_w.png 1100w`
  pic_HSK4 = `https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK4_p.png 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK4_w.png 1100w`
  pic_HSK4plus = `https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/pic_HSK4plus_p.png 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/pic_HSK4plus_w.png 1100w`


  table_HSK12 = `https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/table_HSK12_p.svg 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/table_HSK12_w.svg 1100w`
  table_HSK3 = `https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/table_HSK3_p.svg 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/table_HSK3_w.svg 1100w`
  table_HSK4 = `https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/table_HSK4_p.svg 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/table_HSK4_w.svg 1100w`
  table_HSK4plus = `https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/mobile2/table_HSK4plus_p.svg 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/resources/course/web2/table_HSK4plus_w.svg 1100w`

  ngOnInit(): void {
  }

  tabItem = 'hsk12'

  checkTab(tabItem: string) {
    this.tabItem = 'hsk' + tabItem
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-smart',
  templateUrl: './intro-smart.component.html',
  styleUrls: ['./intro-smart.component.scss']
})
export class IntroSmartComponent implements OnInit {
  picDailyWord = `https://hsk-landing.s3-us-west-2.amazonaws.com/resources/smart/mobile/pic_dailyWord_phone.png 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/resources/smart/web/pic_dailyWord.png 1100w`

  constructor() { }

  ngOnInit(): void {
  }

}

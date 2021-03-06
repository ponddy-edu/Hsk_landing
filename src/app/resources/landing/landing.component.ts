import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

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

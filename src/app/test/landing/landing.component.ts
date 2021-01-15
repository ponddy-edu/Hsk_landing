import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Input()
  tab: string

  backgrond = 'url("https://hsk-landing.s3-us-west-2.amazonaws.com/test/web/index_01.png")'
  background2 = 'url("https://hsk-landing.s3-us-west-2.amazonaws.com/ponddy/59291481_s.png")'

  constructor() {
  }

  ngOnInit(): void {
  }

}

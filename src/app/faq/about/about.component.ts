import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  form01 = `https://d1442rljwt9063.cloudfront.net/faq/mobile/form_01_phone.svg 767w,
  https://d1442rljwt9063.cloudfront.net/faq/web/form_01_web.svg 1100w`
  form02 = `https://d1442rljwt9063.cloudfront.net/faq/mobile/form_02_phone.svg 767w,
  https://d1442rljwt9063.cloudfront.net/faq/web/form_02_web.svg 1100w`


  constructor() { }

  ngOnInit(): void {
  }

}

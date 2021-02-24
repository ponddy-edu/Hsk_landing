import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-ponddy',
  templateUrl: './ai-ponddy.component.html',
  styleUrls: ['./ai-ponddy.component.scss']
})
export class AiPonddyComponent implements OnInit {
  picList = `https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/pic_AISmartLearning_p.png 767w,
   https://hsk-landing.s3-us-west-2.amazonaws.com/home/AISmartLearning.png 1100w`
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-ponddy',
  templateUrl: './ai-ponddy.component.html',
  styleUrls: ['./ai-ponddy.component.scss']
})
export class AiPonddyComponent implements OnInit {
  picList = `/assets/image/home/pic_AISmartLearning_p_new.png 700w,
   /assets/image/home/pic_AISmartLearning_new.png 1100w`;
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../../utils/device.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {
  picStudySmart = `https://hsk-landing.s3-us-west-2.amazonaws.com/home/target_StudySmart.png 1100w,
             https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/pic_StudySmart_P.png 767w`

  picTest = `https://hsk-landing.s3-us-west-2.amazonaws.com/home/target_TestYourAbility.png 1100w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/pic_TestYourAbility_P.png 767w`

  picPractice = `https://hsk-landing.s3-us-west-2.amazonaws.com/home/target_PracticeWithEase.png 1100w,
      https://hsk-landing.s3-us-west-2.amazonaws.com/home/mobile/pic_PracticeWithEase_P.png 767w`

  mobile = true
  constructor(public device: DeviceService) {
    if (device.$mobile.getValue()) {
      this.mobile = true
    } else {
      this.mobile = false
    }
  }

  ngOnInit(): void {
  }

}

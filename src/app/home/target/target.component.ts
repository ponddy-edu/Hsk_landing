import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../../utils/device.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {
  picStudySmart = `https://d1442rljwt9063.cloudfront.net/home/mobile/pic_StudySmart_P.png 767w,
  https://d1442rljwt9063.cloudfront.net/home/target_StudySmart.png 1100w`

  picTest = `https://d1442rljwt9063.cloudfront.net/home/mobile/pic_TestYourAbility_P.png 767w,
  https://d1442rljwt9063.cloudfront.net/home/target_TestYourAbility.png 1100w`

  picPractice = `https://d1442rljwt9063.cloudfront.net/home/mobile/pic_PracticeWithEase_P.png 767w,
  https://d1442rljwt9063.cloudfront.net/home/target_PracticeWithEase.png 1100w,`

  mobile = true

  constructor(public device: DeviceService) {
    if (device.$mobile.getValue()) {
      this.mobile = true
      this.picStudySmart = 'https://d1442rljwt9063.cloudfront.net/home/mobile/pic_StudySmart_P.png '
      this.picTest = 'https://d1442rljwt9063.cloudfront.net/home/mobile/pic_TestYourAbility_P.png'
      this.picPractice = 'https://d1442rljwt9063.cloudfront.net/home/mobile/pic_PracticeWithEase_P.png'
    } else {
      this.mobile = false
      this.picStudySmart = 'https://d1442rljwt9063.cloudfront.net/home/target_StudySmart.png'
      this.picTest = ' https://d1442rljwt9063.cloudfront.net/home/target_TestYourAbility.png'
      this.picPractice = 'https://d1442rljwt9063.cloudfront.net/home/target_PracticeWithEase.png'

    }
  }

  ngOnInit(): void {
  }

}

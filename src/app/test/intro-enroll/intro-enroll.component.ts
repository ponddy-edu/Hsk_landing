import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  CarouselComponent
} from 'angular-responsive-carousel';
import {
  DeviceService
} from '../../../utils/device.service';
import {SheetService} from "../../../utils/sheet.service";

@Component({
  selector: 'app-intro-enroll',
  templateUrl: './intro-enroll.component.html',
  styleUrls: ['./intro-enroll.component.scss']
})
export class IntroEnrollComponent implements OnInit {

  step = [{
    number: '1',
    icon: '/assets/image/test/icon_web.svg'
  }]


  mobile = true
  web = false
  courseCarousel: CarouselComponent;
  courseWidth: number
  courseHeight: number
  isPayedCountList = {level2: 0, level4: 0}

  constructor(public device: DeviceService,
              public sheetService: SheetService) {
    if (device.$mobile.getValue()) {
      this.courseWidth = 240
      this.courseHeight = 550
      this.mobile = true
      this.web = false
    } else {
      this.courseHeight = 600
      this.courseWidth = 500
      this.mobile = false
      this.web = true
    }
  }

  ngOnInit(): void {
    this.sheetService.getIsPayCount()
      .subscribe((respone: any) => {
        this.isPayedCountList = respone
      })
  }


}

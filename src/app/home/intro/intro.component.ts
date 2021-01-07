import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../../utils/device.service';

@Component({
  selector: 'app-home-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  isMobile = false

  constructor(public deviceService: DeviceService) {
    this.isMobile = deviceService.mobile.getValue()
  }

  ngOnInit(): void {

  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from '../../../utils/device.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-intro-chinese',
  templateUrl: './intro-chinese.component.html',
  styleUrls: ['./intro-chinese.component.scss']
})
export class IntroChineseComponent implements OnInit, OnDestroy {
  screenWidth = 900
  widthSubscribe: Subscription

  constructor(public device: DeviceService) {
    this.widthSubscribe = device.$screenWidth
      .subscribe(width => this.screenWidth = width)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.widthSubscribe.unsubscribe()
  }
}

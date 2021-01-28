import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/utils/device.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  web = false
  mobile = true

  constructor(public device: DeviceService) {
    if (device.$mobile.getValue()) {
      console.log('mobile')
      this.mobile = true
      this.web = false
    } else {
      console.log('web')
      this.mobile = false
      this.web = true
    }
  }


  ngOnInit(): void {
  }

}

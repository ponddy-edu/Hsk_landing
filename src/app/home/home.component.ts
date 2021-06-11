import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'angular-responsive-carousel';
import {SheetService} from '../../utils/sheet.service';
import {DeviceService} from "../../utils/device.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public device: DeviceService,) {
  }

  ngOnInit(): void {
    // this.sheetService.addRow()
  }


}

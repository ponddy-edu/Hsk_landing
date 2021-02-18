import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from '../../utils/device.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile: Observable<boolean>
  @Input()
  actvieMenu = 'home'

  constructor(private deviceService: DeviceService) {
    this.isMobile = deviceService.$mobile
  }

  ngOnInit(): void {
    this.isMobile.subscribe()
  }

  mouseEnter(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu()
  }
}

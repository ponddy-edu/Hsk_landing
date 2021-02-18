import {Component, Input, OnInit, Renderer2} from '@angular/core';
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


  enteredButton = false;
  isMatMenuOpen = false;
  // @ts-ignore
  prevButtonTrigger;

  constructor(private deviceService: DeviceService,
              private ren: Renderer2) {
    this.isMobile = deviceService.$mobile
  }

  ngOnInit(): void {
    this.isMobile.subscribe()
  }

  menuEnter() {
    this.isMatMenuOpen = true;
    // menuTrigger.openMenu()
  }

  menuLeave(trigger: MatMenuTrigger, button: any) {
    setTimeout(() => {
      if (!this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80)
  }

  buttonEnter(trigger: MatMenuTrigger) {
    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger != trigger) {
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        trigger.openMenu();
      } else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
        trigger.openMenu();
      } else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
      }
    })
  }

  buttonLeave(trigger: MatMenuTrigger, button: any) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
      }
      if (!this.isMatMenuOpen) {
        trigger.closeMenu();
      } else {
        this.enteredButton = false;
      }
    }, 100)
  }
}

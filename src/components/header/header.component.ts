import {Component, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DeviceService} from '../../utils/device.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatMenuTrigger} from '@angular/material/menu';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile: Observable<boolean>
  @Input()
  actvieMenu = 'home'

  menuOpen = true;
  enteredButton = false;
  isMatMenuOpen = false;
  // @ts-ignore
  prevButtonTrigger;
  loginActive = "Login"

  @ViewChild('expansion')
  expansionComponent:MatExpansionPanel


  constructor(private deviceService: DeviceService,
              private ren: Renderer2,
              public dialog: MatDialog) {
    this.isMobile = deviceService.$mobile
  }

  ngOnInit(): void {
    this.isMobile.subscribe()
    const token = localStorage.getItem("token");
    if(token){
      this.loginActive = 'Logout'
    } else {
      this.loginActive = 'Login'
    }
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

  openLogin() {
    this.dialog.open(LoginComponent,{maxWidth: "90vw",maxHeight:"150vw"})
    this.menuOpen = false;
    this.expansionComponent.close();
  }

}

import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../utils/auth.service";
import {LoginComponent} from "../../components/login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {DeviceService} from "../../utils/device.service";
import {PaySuccessComponent} from "../../components/pay-success/pay-success.component";

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  constructor(private auth: AuthService,
              public dialog: MatDialog,
              public device: DeviceService) {
  }

  ngOnInit(): void {
    // this.auth.

    // this.checkActionPay()
    // setTimeout(() => {
    //   if (!localStorage.getItem('token') && this.device.isBrowser) {
    //     console.log('not login')
    //     this.openLoginDialog()
    //   }
    // }, 1000)
    // let a = atob(localStorage.getItem('token'))
  }

  checkActionPay() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('action');
    if (myParam === 'pay') {
      this.dialog.open(PaySuccessComponent,
        {
          width: '90%', maxWidth: '450px',
          data: {
            mode: 'testEnroll'
          }
        })
    }
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {maxWidth: '90vw', maxHeight: '100vh'})

    // this.menuOpen = false;
    // this.expansionComponent.close();
  }
}

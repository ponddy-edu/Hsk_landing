import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../utils/auth.service";
import {LoginComponent} from "../../components/login/login.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  constructor(private auth: AuthService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // this.auth.


    setTimeout(() => {
      if (!localStorage.getItem('token')) {
        console.log('not login')
        this.openLoginDialog()
      }
    }, 1000)
    // let a = atob(localStorage.getItem('token'))
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {maxWidth: '90vw', maxHeight: '100vh'})

    // this.menuOpen = false;
    // this.expansionComponent.close();
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CarouselComponent} from 'angular-responsive-carousel';
import { LoginComponent } from 'src/components/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dialog.open(LoginComponent)
  }


}

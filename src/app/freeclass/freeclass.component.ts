import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PaySuccessComponent} from "../../components/pay-success/pay-success.component";

@Component({
  selector: 'app-freeclass',
  templateUrl: './freeclass.component.html',
  styleUrls: ['./freeclass.component.scss']
})
export class FreeclassComponent implements OnInit {

  constructor(private dialog: MatDialog) {
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action')
    console.log(action)
    if (action === 'pay') {
      this.dialog.open(PaySuccessComponent, {width: '90%', maxWidth: '450px'})
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

  ngOnInit(): void {
  }

}

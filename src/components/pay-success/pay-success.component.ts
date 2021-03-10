import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-pay-success',
  templateUrl: './pay-success.component.html',
  styleUrls: ['./pay-success.component.scss']
})
export class PaySuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PaySuccessComponent>) {
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-upload-image-info',
  templateUrl: './upload-image-info.component.html',
  styleUrls: ['./upload-image-info.component.scss']
})
export class UploadImageInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadImageInfoComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close()
  }
}

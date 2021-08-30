import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeviceService} from "../../../../utils/device.service";

@Component({
  selector: 'app-upload-image-info',
  templateUrl: './upload-image-info.component.html',
  styleUrls: ['./upload-image-info.component.scss']
})
export class UploadImageInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadImageInfoComponent>,
              public device: DeviceService,
              @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  close() {
    if (this.device.$mobile.getValue()) {
      this.dialogRef.close()
    }

  }
}

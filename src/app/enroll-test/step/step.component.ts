import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import {Timestamp} from 'rxjs/internal-compatibility';
import {SheetService} from '../../../utils/sheet.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @ViewChild('stepper')
  private myStepper: MatStepper;

  userInfoFormGroup: FormGroup;
  userInfo2FormGroup: FormGroup;
  testInfoFormGroup: FormGroup;
  summaryFormGroup: FormGroup;
  chooseTestLevel = 0

  constructor(private formBuilder: FormBuilder, public sheetService: SheetService) {
  }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      Email: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      Chinese_Name: new FormControl('', Validators.required),
      Nationality: new FormControl('', Validators.required),
      Mother_Tongue: new FormControl('', Validators.required),
    });
    this.userInfo2FormGroup = this.formBuilder.group({
      Birth_Date: new FormControl('', Validators.required),
      Belong_To: new FormControl(''),
      Learning_For: new FormControl('', Validators.required),
      Reason: new FormControl('', Validators.required),
      Known_From: new FormControl('', Validators.required),
    });

    this.testInfoFormGroup = this.formBuilder.group({
      Test_Date: new FormControl('', Validators.required),
    });
    this.summaryFormGroup = this.formBuilder.group({
        agree: new FormControl('', Validators.required)
      }
    )

    setTimeout(() => {
      // this.myStepper.selectedIndex = 3
    }, 1000)

  }

  payment() {
    const formData = {
      ...this.userInfoFormGroup.getRawValue(),
      ...this.userInfo2FormGroup.getRawValue(),
      ...{Test_Level: this.chooseTestLevel},
      ...{Booking_Id: this.userInfoFormGroup.get('Email')?.value + Date.now().toString()}
    }
    this.sheetService.addRow(formData)
    console.log(formData)

  }
}

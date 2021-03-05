import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";

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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
      tongue: new FormControl('', Validators.required),
    });
    this.userInfo2FormGroup = this.formBuilder.group({
      birth: new FormControl('', Validators.required),
      belong: new FormControl(''),
      learn_time: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
      know_us: new FormControl('', Validators.required),
    });

    this.testInfoFormGroup = this.formBuilder.group({
      date: new FormControl('', Validators.required),
    });
    this.summaryFormGroup = this.formBuilder.group({
        agree: new FormControl('', Validators.required)
      }
    )

    setTimeout(() => {
      this.myStepper.selectedIndex = 3
    }, 1000)

  }

}

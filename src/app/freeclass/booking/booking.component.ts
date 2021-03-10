import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  userFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      Email: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
      Role: new FormControl(''),
      Mother_Tongue: new FormControl('', Validators.required),
    });
  }

}

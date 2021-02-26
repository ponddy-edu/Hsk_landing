import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import {BehaviorSubject} from "rxjs";
// import {AuthProvider, NavigationService} from "/utils/auth.service.ts";

// import {RecaptchaComponent} from "ng-recaptcha";
// import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''

  error_message = ''
  success_message = ''
  $step = new BehaviorSubject<'start' | 'login' | 'register' | 'code' | 'success'>('start');
  code = []
  socialLoginUrl = {fb: '', google: ''}
  $recaptcha_response = new BehaviorSubject<string>('');

  formStart = new FormGroup({
    email: new FormControl('', Validators.required),
  })
  formRegister = new FormGroup({
    email: new FormControl('', Validators.required),
    email_error: new FormControl(''),
    password: new FormControl('', Validators.required),
    password_error: new FormControl(''),
    agree: new FormControl(false, Validators.requiredTrue)
  });

  formLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    email_error: new FormControl(''),
    password: new FormControl('', Validators.required),
    password_error: new FormControl(''),
    remember_me: new FormControl(false),
  });

  isRememberMe = false
  isEmailExist = false
  isLoading = false
  fade_out = false

  // @ViewChild('captchaLogin')
  // captchaElem_login: RecaptchaComponent;
  // @ViewChild('captchaCode')
  // captchaElem_code: RecaptchaComponent;

  resendTimeLock = 0

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
) {
this.$step.next('start')

}

  public dismiss(): void {
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

  clickContinue() {//email
    // this.authService.checkEmailExit(email)
    //   .pipe(catchError(err => {
    //     this.formStart.get('email').setErrors({'incorrect': true})
    //     this.isEmailExist = true
    //     return of(null)
    //   }))
    //   .subscribe(res => {
    //     res ? this.$step.next('login') : ''
    //     setTimeout(() => {
    //       document.getElementById('password').focus();
    //     }, 200)
    //   })
  }

  clickSocialLogin(socialClass:any) {
    // this.authService.socialLogin(socialClass)
  }

  forgotPassword() {
    // this.authService.forgotPassword(this.email)
  }

  register() {
    // const email = this.formRegister.get('email').value
    // const password = this.formRegister.get('password').value
    // this.isLoading = true
    // this.authService.register(email, password)
    //   .pipe(catchError(err => {
    //     if (err.error.password) {
    //       this.formRegister.get('password_error').setValue(err.error.password[0])
    //       this.formRegister.get('password').setErrors({'incorrect': true})
    //     }
    //     if (err.error.email) {
    //       this.formRegister.get('email_error').setValue(err.error.email[0])
    //       this.formRegister.get('email').setErrors({'incorrect': true})
    //     }
    //     this.isLoading = false
    //     throw err
    //   }))
    //   .subscribe(res => {
    //     this.$step.next('code')
    //     this.isLoading = false
    //     setTimeout(
    //       () => {
    //         document.getElementById('code0').focus()
    //       }, 200
    //     )
    //   })
  }

  onPaste(event:any, recordIndex:any) {
    // let clipboardData = event.clipboardData || window['clipboardData'];
    // let clipText = clipboardData.getData('text')

    // clipText = clipText.replace(/[\r\n]+/gm, "");
    // clipText = (clipText.length > 4) ? clipText.substring(0, 4) : clipText
    // for (let i = 0; i <= 3; i++) {
    //   this.code[i] = clipText[i]
    // }

    // this.executeRecaptcha_code()

  }

  resendCode() {
    if (!this.$recaptcha_response) {
      this.executeRecaptcha_code()
    }
    // this.authService.resendCode(this.email, this.$recaptcha_response.getValue())
    //   .subscribe(res => {
    //     this.startResendTimeLock()
    //   })
  }
  executeRecaptcha_code() {
    if (this.$recaptcha_response.getValue() || this.$recaptcha_response.getValue() === '') {
      // this.captchaElem_code.execute()
    }
  }

}

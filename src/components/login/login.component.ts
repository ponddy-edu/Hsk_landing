import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import {BehaviorSubject} from "rxjs";
import {RecaptchaComponent} from "ng-recaptcha";
import { AuthService } from 'src/utils/auth.service';

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

  @ViewChild('captchaLogin')
  captchaElem_login: RecaptchaComponent;
  @ViewChild('captchaCode')
  captchaElem_code: RecaptchaComponent;

  resendTimeLock = 0

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public authService: AuthService,
) {
this.$step.next('start')

}

  public dismiss(): void {
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

  // resendCode() {
  //   if (!this.$recaptcha_response) {
  //     this.executeRecaptcha_code()
  //   }
  //   // this.authService.resendCode(this.email, this.$recaptcha_response.getValue())
  //   //   .subscribe(res => {
  //   //     this.startResendTimeLock()
  //   //   })
  // }
  // executeRecaptcha_code() {
  //   if (this.$recaptcha_response.getValue() || this.$recaptcha_response.getValue() === '') {
  //     this.captchaElem_code.execute()
  //   }
  // }

//-------------------------

  ionViewDidLoad() {
    // this.isRememberMe = !!localStorage.getItem('login_remember')
    // if (this.isRememberMe) {
    //   this.$step.next('login')
    //   this.email = localStorage.getItem('email')
    //   this.password = localStorage.getItem('password')
    //   this.formLogin.get('email').markAsDirty()
    //   this.formLogin.get('password').markAsDirty()
    // }
    // this.$step.subscribe(step => {
    //   this.error_message = ''
    //   if (step == 'register') {
    //     if (this.email) {
    //       setTimeout(() => {
    //         document.getElementById('password_register').focus();
    //       }, 200)
    //     } else {
    //       setTimeout(() => {
    //         document.getElementById('email_register').focus();
    //       }, 200)
    //     }
    //   }
    // })

  }

  ngOnDestroy(): void {
    this.$step.unsubscribe()
  }


  clickContinue(email:any) {
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

  login() {
    // if (this.isRememberMe) {
    //   localStorage.setItem('login_remember', 'true')
    //   localStorage.setItem('email', this.email)
    //   localStorage.setItem('password', this.password)
    // } else {
    //   localStorage.removeItem('login_remember')
    //   localStorage.removeItem('email')
    //   localStorage.removeItem('password')
    // }
    // this.error_message = ''
    // this.captchaElem_login.execute()
    // this.$recaptcha_response
    //   .pipe(filter(res => res && (res != '')),
    //     take(1))
    //   .subscribe(res => {
    //     this.isLoading = true
    //     this.authService.login(this.email, this.password, this.$recaptcha_response.getValue())
    //       .pipe(tap(res => {
    //         this.isLoading = false
    //       }))
    //       .pipe(catchError(err => {
    //         if (err.error.password) {
    //           this.error_message = err.error.password[0]
    //           this.formLogin.get('password').setErrors({'incorrect': true})
    //         }
    //         if (err.error.email) {
    //           this.error_message = err.error.email[0]
    //           this.formLogin.get('email').setErrors({'incorrect': true})
    //         }
    //         // this.formLogin.setValue()
    //         this.captchaElem_login.reset()
    //         this.isLoading = false
    //         throw err
    //       }))
    //       .subscribe(res => {
    //         localStorage.setItem('token', res['token'])
    //         this.authService.setupSelf()
    //         this.success_message = 'You have successfully verified the account.'
    //         this.isLoading = false
    //         this.$step.next('success')
    //         this.fadeOutAndDismiss()
    //       })
    //   })
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

  verifyCode() {
    // this.error_message = ''
    // let codeString = ''
    // for (let char of this.code) {
    //   codeString += char
    // }
    // // document.getElementById('code')
    // this.captchaElem_login.execute()

    // this.$recaptcha_response
    //   .pipe(filter(res => res && (res != '')),
    //     take(1))
    //   .subscribe($recaptcha_response => {
    //     this.authService.verify(this.email, codeString, this.$recaptcha_response.getValue())
    //       .pipe(catchError(err => {
    //         this.error_message = err.error.detail
    //         this.captchaElem_login.reset()
    //         throw err
    //       }))
    //       .subscribe(res => {
    //         this.success_message = 'You have successfully verified the account.'
    //         this.$step.next('success')
    //         this.captchaElem_login.reset()
    //         this.loginBackground()
    //       })
    //   })
  }

  loginBackground() {
    // this.captchaElem_login.execute()
    // this.$recaptcha_response
    //   .pipe(filter(res => res && (res != '')),
    //     take(1))
    //   .subscribe(res => {
    //     this.authService.login(this.email, this.password, this.$recaptcha_response.getValue())
    //       .pipe(catchError(err => {
    //         this.$step.next('login')
    //         // this.formLogin.setValue()
    //         this.captchaElem_login.reset()
    //         throw err
    //       }))
    //       .subscribe(res => {
    //         localStorage.setItem('token', res['token'])
    //         this.authService.setupSelf()
    //         this.fadeOutAndDismiss()
    //       })
    //   })
  }

  clickSocialLogin(socialClass:any) {
    // this.authService.socialLogin(socialClass)
  }

  resolved_recaptcha(recaptcha_response: any) {
    this.$recaptcha_response.next(recaptcha_response)
  }

  forgotPassword() {
    // this.authService.forgotPassword(this.email)
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

  startResendTimeLock() {
    // this.resendTimeLock = 59
    // const lock = interval(1000)
    //   .subscribe(res => {
    //     this.resendTimeLock -= 1
    //     if (this.resendTimeLock == 0) {
    //       lock.unsubscribe()
    //     }
    //   })
  }

  onDigitInput(event:any, index:any) {
    // let element;

    // if (event.code === 'Backspace')
    //   element = event.srcElement.previousElementSibling;

    // var numbers = /^[0-9]+$/;
    // if (!event.key.match(numbers)) {
    //   return;
    // }
    // if (event.code !== 'Backspace') {
    //   event.srcElement.value = event.key
    //   element = event.srcElement.nextElementSibling;
    // }

    // this.code[index] = event.key
    // element.focus();

    // if (this.code.length >=4) {
    //   this.executeRecaptcha_code()
    // }
  }

  onPaste(event:any) {
    // let clipboardData = event.clipboardData || window['clipboardData'];
    // let clipText = clipboardData.getData('text')

    // clipText = clipText.replace(/[\r\n]+/gm, "");
    // clipText = (clipText.length > 4) ? clipText.substring(0, 4) : clipText
    // for (let i = 0; i <= 3; i++) {
    //   this.code[i] = clipText[i]
    // }

    // this.executeRecaptcha_code()

  }

  executeRecaptcha_code() {
    if (this.$recaptcha_response.getValue() || this.$recaptcha_response.getValue() === '') {
      this.captchaElem_code.execute()
    }
  }

  fadeOutAndDismiss() {
    setTimeout(() => {
      this.fade_out = true
    }, 4000)
    setTimeout(() => {
      this.dismiss()
    }, 6000)
  }


}

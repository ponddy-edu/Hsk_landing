import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from '@angular/material/dialog';
import {BehaviorSubject, of} from "rxjs";
import {RecaptchaComponent} from "ng-recaptcha";
import {AuthService} from 'src/utils/auth.service';
import {catchError, filter, take, tap,} from "rxjs/operators";
import {interval} from 'rxjs/internal/observable/interval';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password = ''
  agree = ''

  errorMessage = ''
  successMessage = ''
  $step = new BehaviorSubject<'start' | 'login' | 'register' | 'code' | 'success'>('start');
  code: any = []
  $recaptchaResponse = new BehaviorSubject<string>('');

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

  formVerification = new FormGroup({});
  formSuccess = new FormGroup({});

  isRememberMe = false
  isEmailExist = false
  isLoading = false
  fadeOut = false

  @ViewChild('captchaLogin')
  captchaElemLogin: RecaptchaComponent;
  @ViewChild('captchaCode')
  captchaElemCode: RecaptchaComponent;

  resendTimeLock = 0

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public authService: AuthService,
  ) {
    this.$step.next('start')

  }

  public dismiss(): void {
    this.dialogRef.close()
    location.reload()
  }

  ngOnInit(): void {
  }


  ionViewDidLoad() {
    this.isRememberMe = !!localStorage.getItem('login_remember')
    if (this.isRememberMe) {
      this.$step.next('login')
      // @ts-ignore
      this.email = localStorage.getItem('email')
      // @ts-ignore
      this.password = localStorage.getItem('password')
      // @ts-ignore
      this.formLogin.get('email').markAsDirty()
      // @ts-ignore
      this.formLogin.get('password').markAsDirty()
    }
    this.$step.subscribe(step => {
      this.errorMessage = ''
      if (step === 'register') {
        if (this.email) {
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('password_register').focus();
          }, 200)
        } else {
          setTimeout(() => {
            // @ts-ignore
            document.getElementById('email_register').focus();
          }, 200)
        }
      }
    })

  }


  clickContinue(email: any) {
    this.authService.checkEmailExit(email)
      .pipe(catchError(err => {
        this.formStart.get('email')?.setErrors({'incorrect': true})
        this.isEmailExist = true
        return of(null)
      }))
      .subscribe(res => {
        res ? this.$step.next('login') : ''
        setTimeout(() => {
          document.getElementById('password')?.focus();
        }, 200)
      })
  }

  login() {
    if (this.isRememberMe) {
      localStorage.setItem('login_remember', 'true')
      localStorage.setItem('email', this.email)
      localStorage.setItem('password', this.password)
    } else {
      localStorage.removeItem('login_remember')
      localStorage.removeItem('email')
      localStorage.removeItem('password')
    }
    this.errorMessage = ''
    this.captchaElemLogin.execute()
    this.$recaptchaResponse
      .pipe(filter(res => !!(res && (res !== ''))),
        take(1))
      .subscribe(res => {
        this.isLoading = true
        this.authService.login(this.email, this.password, this.$recaptchaResponse.getValue())
          .pipe(tap(res => {
            this.isLoading = false
          }))
          .pipe(catchError(err => {
            if (err.error.password) {
              this.errorMessage = err.error.password[0]
              this.formLogin.get('password')?.setErrors({'incorrect': true})
            }
            if (err.error.email) {
              this.errorMessage = err.error.email[0]
              this.formLogin.get('email')?.setErrors({'incorrect': true})
            }
            // this.formLogin.setValue()
            this.captchaElemLogin.reset()
            this.isLoading = false
            throw err
          }))
          .subscribe((res: any) => {
            localStorage.setItem('token', res['token'])
            this.successMessage = 'You have successfully verified the account.'
            this.isLoading = false
            this.$step.next('success')
            this.fadeOutAndDismiss()
          })
      })
  }

  register() {
    const email = this.formRegister.get('email')?.value
    const password = this.formRegister.get('password')?.value
    this.isLoading = true
    this.authService.register(email, password)
      .pipe(catchError(err => {
        if (err.error.password) {
          this.formRegister.get('password_error')?.setValue(err.error.password[0])
          this.formRegister.get('password')?.setErrors({'incorrect': true})
        }
        if (err.error.email) {
          this.formRegister.get('email_error')?.setValue(err.error.email[0])
          this.formRegister.get('email')?.setErrors({'incorrect': true})
        }
        this.isLoading = false
        throw err
      }))
      .subscribe((res: any) => {
        this.$step.next('code')
        this.isLoading = false
        setTimeout(
          () => {
            document.getElementById('code0')?.focus()
          }, 200
        )
      })
  }

  verifyCode() {
    this.errorMessage = ''
    let codeString = ''
    for (const char of this.code) {
      codeString += char
    }
    // document.getElementById('code')
    this.captchaElemLogin.execute()

    this.$recaptchaResponse
      .pipe(filter((res: any) => res && (res !== '')),
        take(1))
      .subscribe(recaptchaResponse => {
        this.authService.verify(this.email, codeString, this.$recaptchaResponse.getValue())
          .pipe(catchError(err => {
            this.errorMessage = err.error.detail
            this.captchaElemLogin.reset()
            throw err
          }))
          .subscribe(res => {
            this.successMessage = 'You have successfully verified the account.'
            this.$step.next('success')
            this.captchaElemLogin.reset()
            this.loginBackground()
          })
      })
  }

  loginBackground() {
    this.captchaElemLogin.execute()
    this.$recaptchaResponse
      .pipe(filter((res: any) => res && (res !== '')),
        take(1))
      .subscribe(res => {
        this.authService.login(this.email, this.password, this.$recaptchaResponse.getValue())
          .pipe(catchError(err => {
            this.$step.next('login')
            // this.formLogin.setValue()
            this.captchaElemLogin.reset()
            throw err
          }))
          .subscribe((authRes: any) => {
            localStorage.setItem('token', authRes.token)
            this.fadeOutAndDismiss()
          })
      })
  }

  clickSocialLogin(socialClass: any) {
    this.authService.socialLogin(socialClass)
  }

  resolved_recaptcha(recaptchaResponse: any) {
    this.$recaptchaResponse.next(recaptchaResponse)
  }

  forgotPassword() {
    this.authService.forgotPassword(this.email)
  }

  resendCode() {
    if (!this.$recaptchaResponse) {
      this.executeRecaptcha_code()
    }
    this.$recaptchaResponse
      .subscribe(recaptcha => {
        this.authService.resendCode(this.email, this.$recaptchaResponse.getValue())
          .subscribe(res => {
            this.startResendTimeLock()
          })
      })

  }

  startResendTimeLock() {
    this.resendTimeLock = 59
    const lock = interval(1000)
      .subscribe(res => {
        this.resendTimeLock -= 1
        if (this.resendTimeLock === 0) {
          lock.unsubscribe()
        }
      })
  }

  onDigitInput(event: any, index: any) {
    let element;

    if (event.code === 'Backspace') {
      element = event.srcElement.previousElementSibling;
    }

    const numbers = /^[0-9]+$/;
    if (!event.key.match(numbers)) {
      return;
    }
    if (event.code !== 'Backspace') {
      event.srcElement.value = event.key
      element = event.srcElement.nextElementSibling;
    }

    this.code[index] = event.key
    element.focus();

    if (this.code.length >= 4) {
      this.executeRecaptcha_code()
    }
  }

  onPaste(event: any) {
    // @ts-ignore
    const clipboardData = event.clipboardData || window.clipboardData;
    let clipText = clipboardData.getData('text')

    clipText = clipText.replace(/[\r\n]+/gm, '');
    clipText = (clipText.length > 4) ? clipText.substring(0, 4) : clipText
    for (let i = 0; i <= 3; i++) {
      this.code[i] = clipText[i]
    }

    this.executeRecaptcha_code()

  }

  executeRecaptcha_code() {
    if (this.$recaptchaResponse.getValue() || this.$recaptchaResponse.getValue() === '') {
      this.captchaElemCode.execute()
    }
  }

  fadeOutAndDismiss() {
    setTimeout(() => {
      this.fadeOut = true
    }, 4000)
    setTimeout(() => {
      this.dismiss()
    }, 6000)
  }


}

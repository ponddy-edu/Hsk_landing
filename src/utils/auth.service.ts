import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient,
  ) { }

  public checkEmailExit(email: string) {
    email = email.toLowerCase()
    const endpoint = '/api/auth/auth/exists'
    const url = environment.authApiUrl + endpoint
    const body = {
      "email": email,
    }
    return this.http.post(url, body)
    // return of(true)
  }

  public login(email: string, password: string, recaptcha_response: string) {
    email = email.toLowerCase()
    const endpoint = '/api/auth/auth';
    const url = environment.authApiUrl + endpoint;
    let body = {
      email: email,
      password: password,
      app: "hsk",
      g_recaptcha_response: recaptcha_response
    };
    console.log(password)

    return this.http.post(url, body)
      .pipe(tap((res:any) => {
        localStorage.setItem('token', res['token'])
        // console.log(localStorage.setItem('token', res['token']))
      }))

    // const token = response["token"];
    // return response;
  }


  public register(email: string, password: string) {
    email = email.toLowerCase()
    const endpoint = '/api/auth/auth/register'
    const body = {
      "email": email,
      "password": password,
      "client_id": environment.clientId,
      "redirect_uri": environment.appUrl,
      "next": "/",
      "template": "WITH-CODE"
    }
    const url = environment.authApiUrl + endpoint
    return this.http.post(url, body)
  }


  public verify(email: string, code: string, recaptcha_response: string) {
    email = email.toLowerCase()
    const endpoint = '/auth/auth/verify'
    const url = environment.authApiUrl + endpoint;
    let body = {
      email: email,
      code: code
    };
    return this.http.post(url, body)
  }


  socialLogin(socialClass:any) {
    let url
    // let language = localStorage.getItem('lang')
    // if (language === "zh") {
    //   language = "zh-hans";
    // } else if (language === "zh-TW") {
    //   language = "zh-hant";
    // } else if (language === 'th') {
    //   language = 'en'
    // }
    let language = 'en'
    // var backToPage = window.location.hash.split("#")[1];
    switch (socialClass){
        case 'fb':
            url = `${environment.authApiUrl}/${language}/auth/social/facebook?client_id=${environment.clientId}&token=${localStorage.getItem('token')}&redirect_uri=${environment.appUrl}`;
            break
        case 'google':
            url = `${environment.authApiUrl}/${language}/auth/social/google-oauth2?client_id=${environment.clientId}&token=${localStorage.getItem('token')}&redirect_uri=${environment.appUrl}`;
            break
    }
    window.open(`${url}`, '_self')
  }

  public resendCode(email:any, recaptcha_response:any) {
    email = email.toLowerCase()
    const endpoint = '/api/auth/auth/resend'
    const url = environment.authApiUrl + endpoint
    const body = {
      "email": email,
      "client_id": environment.clientId,
      "redirect_uri": environment.appUrl,
      "next": "/reader-dashboard",
      "g_recaptcha_response": recaptcha_response
    }
    return this.http.post(url, body)
  }

  forgotPassword(email:any) {
    email = email.toLowerCase()
    const url = environment.authApiUrl + '/' + localStorage.getItem('lang') + '/auth/forgot/?email=' + encodeURI(email)
    window.open(url, '_blank')
  }
}

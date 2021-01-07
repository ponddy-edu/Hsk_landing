import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {map, tap, throttleTime} from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public mobile = new BehaviorSubject(false)
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any) {


    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
      this.checkScreenSize()
      const screenSizeChanged$ = fromEvent(window, 'resize')
        .pipe(throttleTime(500),
          tap(res => this.checkScreenSize()))
      screenSizeChanged$.subscribe()
    } else {
      this.isBrowser = false
      this.mobile.next(true);
    }

  }

  checkScreenSize(): void {
    if (window.screen.width <= 767) { // 768px portrait
      this.mobile.next(true);
      console.log(true)
    } else {
      this.mobile.next(false)
    }

  }
}




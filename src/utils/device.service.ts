import {Injectable} from '@angular/core';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {map, tap, throttleTime} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public mobile = new BehaviorSubject(false)

  constructor() {
    this.checkScreenSize()
    const screenSizeChanged$ = fromEvent(window, 'resize')
      .pipe(throttleTime(500),
        tap(res => this.checkScreenSize()))
    screenSizeChanged$.subscribe()
  }

  checkScreenSize(): void {
    console.log(window.screen)
    if (window.screen.width <= 767) { // 768px portrait
      this.mobile.next(true);
      console.log(true)
    } else {
      this.mobile.next(false)
    }
  }
}

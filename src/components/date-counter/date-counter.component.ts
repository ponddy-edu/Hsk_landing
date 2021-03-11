import {Component, Input, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-date-counter',
  templateUrl: './date-counter.component.html',
  styleUrls: ['./date-counter.component.scss']
})
export class DateCounterComponent implements OnInit {
  @Input()
  countDownDate: number


  days: string
  hours: string
  minutes: string
  seconds: string

  constructor() {
  }

  ngOnInit(): void {
    this.countDownDate = new Date('Mar 22, 2021 15:37:25').getTime()

    interval(1000)
      .subscribe(res => {
        const now = new Date().getTime();
        // Find the distance between now and the count down date
        const distance = this.countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        this.days = ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
        this.hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        this.minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
        this.seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
      })


  }

}

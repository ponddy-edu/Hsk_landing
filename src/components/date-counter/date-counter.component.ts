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


  days: number
  hours: number
  minutes: number
  seconds: number

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
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      })


  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'angular-responsive-carousel';

@Component({
  selector: 'app-home-about',
  templateUrl: './about-ponddy.component.html',
  styleUrls: ['./about-ponddy.component.scss']
})
export class AboutPonddyComponent implements OnInit {
  @ViewChild('course_carousel')
  courseComponent: CarouselComponent = {} as CarouselComponent

  constructor() {
  }

  ngOnInit(): void {
  }

  coursePrev(): void {
    this.courseComponent.prev()
  }

  courseNext(): void {
    this.courseComponent.next()
  }
}

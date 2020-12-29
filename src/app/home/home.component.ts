import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'angular-responsive-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('course_carousel')
    // @ts-ignore
  courseCarousel: CarouselComponent;

  constructor() {
  }

  ngOnInit(): void {
    console.log(123)
  }

  coursePrev(): void {
    this.courseCarousel.prev()
  }

  courseNext(): void {
    this.courseCarousel.next()
  }
}

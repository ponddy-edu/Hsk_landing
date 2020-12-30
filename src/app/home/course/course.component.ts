import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular-responsive-carousel";

@Component({
  selector: 'app-home-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @ViewChild('course_carousel')
    // @ts-ignore
  courseCarousel: CarouselComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

  coursePrev(): void {
    this.courseCarousel.prev()
  }

  courseNext(): void {
    this.courseCarousel.next()
  }

}

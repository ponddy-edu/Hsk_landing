import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular-responsive-carousel";
import {DeviceService} from "../../../utils/device.service";

@Component({
  selector: 'app-home-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @ViewChild('course_carousel')
    // @ts-ignore
  courseCarousel: CarouselComponent;
  courseWidth: number
  courseHeight: number

  constructor(private device: DeviceService) {
    if (device.mobile.getValue()) {
      this.courseWidth = 330
      this.courseHeight = 400
    } else {
      this.courseHeight = 500
      this.courseWidth = 360
    }
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

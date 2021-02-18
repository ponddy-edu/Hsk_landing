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
  disableClass = 'left'

  @ViewChild('course_carousel')
  courseComponent: CarouselComponent;

  constructor(public device: DeviceService) {
    if (device.$mobile.getValue()) {
      this.courseWidth = 330
      this.courseHeight = 500
    } else {
      this.courseHeight = 415
      this.courseWidth = 300
    }
  }

  ngOnInit(): void {
  }

  coursePrev(): void {
    let disableImg = this.courseComponent.counter.split('/')
    this.courseComponent.prev()
    if (Number.parseInt(disableImg[0]) === 2) {
      this.disableClass = "left"
    } else {
      this.disableClass = ''

    }
  }

  courseNext(): void {
    let disableImg = this.courseComponent.counter.split('/')
    this.courseComponent.next()
    if (Number.parseInt(disableImg[0]) === Number.parseInt(disableImg[1])-3) {
      this.disableClass = "right"
    } else {
      this.disableClass = ''

    }
  }

}

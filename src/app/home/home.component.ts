import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'angular-responsive-carousel';
import {SheetService} from '../../utils/sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public sheetService: SheetService) {
  }

  ngOnInit(): void {
    this.sheetService.listMajors()
  }


}

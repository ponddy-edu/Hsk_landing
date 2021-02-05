import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Output()
  $tabChange = new EventEmitter<number>()

  tabIndex = 0

  @Input()
  inputTab: number
  @Output()
  tabChange = new EventEmitter<number>()

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  changeTab(tabIndex: any) {
    switch (tabIndex) {
      case 0:
        this.router.navigate(['./tests/chinese']);
        break
      case 1:
        this.router.navigate(['./tests/instructions']);
        break
    }
  }
}

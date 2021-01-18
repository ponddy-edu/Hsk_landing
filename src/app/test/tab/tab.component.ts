import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Output()
  $tabChange = new EventEmitter<number>()


  constructor() {
  }

  ngOnInit(): void {
  }

  changeTab(tabIndex: any) {
    this.$tabChange.emit(tabIndex)
  }
}

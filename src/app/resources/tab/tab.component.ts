import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  @Output()
  tabChange = new EventEmitter<number>()

  @Output()
  downloadChange = new EventEmitter<boolean>()

  isDownloadPage = false



  constructor() {
  }

  ngOnInit(): void {
  }

  setDownload(downloadIndex: any) {
    this.isDownloadPage = downloadIndex
    this.downloadChange.emit(downloadIndex)
  }

  changeTab(tabIndex: any) {
    this.tabChange.emit(tabIndex)
  }
}

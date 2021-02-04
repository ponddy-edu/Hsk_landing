import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input()
  inputTab: number
  @Output()
  tabChange = new EventEmitter<number>()

  @Output()
  downloadChange = new EventEmitter<boolean>()

  isDownloadPage = false


  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  setDownload(downloadIndex: any) {
    // this.isDownloadPage = downloadIndex
    // this.downloadChange.emit(downloadIndex)
    this.router.navigate(['./resources/download']);
  }

  changeTab(tabIndex: any) {
    // this.tabChange.emit(tabIndex)
    switch (tabIndex) {
      case 0:
        this.router.navigate(['./resources/course']);
        break
      case 1:
        this.router.navigate(['./resources/preparation']);
        break
      case 2:
        this.router.navigate(['./resources/smart']);
        break
    }
  }
}

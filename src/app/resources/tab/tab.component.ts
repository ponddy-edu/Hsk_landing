import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input()
  inputTab: number

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
    switch (tabIndex) {
      case 0:
        this.router.navigate(['./resources/preparation']);
        break
      case 1:
        this.router.navigate(['./resources/smart']);
        break
      case 2:
        this.router.navigate(['./resources/download']);
        break
    }
  }
}

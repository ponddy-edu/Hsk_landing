import {collectExternalReferences} from '@angular/compiler';
import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public tab = 0
  isDownloadPage = false

  constructor(private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(res => console.log(res))
    this.activatedRoute.url.subscribe((res) => {
      const tabIndex = this.activatedRoute.snapshot.firstChild ? this.activatedRoute.snapshot.firstChild.data.tab : 0;
      if (tabIndex < 3) {
        this.setTab(tabIndex)
      } else if (tabIndex === 3) {
        this.setDownloadRe(true)
      }
    });
  }

  setTab(tabIndex: number) {
    this.tab = tabIndex
  }

  setDownloadRe(downloadIndex: any) {
    this.isDownloadPage = downloadIndex
  }
}

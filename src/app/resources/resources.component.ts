import {collectExternalReferences} from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit, OnDestroy{
  public tab = 0
  isDownloadPage = false
  routeSubscribe:Subscription
  constructor(private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(res => console.log(res))
    this.routeSubscribe = this.activatedRoute.url.
    subscribe((res) => {
      const tabIndex = this.activatedRoute.snapshot.firstChild ? this.activatedRoute.snapshot.firstChild.data.tab : 0;
      if (tabIndex < 3) {
        this.setTab(tabIndex)
      } else if (tabIndex === 3) {
        this.setDownloadRe(true)
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscribe.unsubscribe()
  }

  setTab(tabIndex: number) {
    this.tab = tabIndex
    if (tabIndex != 3) {
      this.isDownloadPage = false
    }
  }

  setDownloadRe(downloadIndex: any) {
    this.isDownloadPage = downloadIndex
  }
}

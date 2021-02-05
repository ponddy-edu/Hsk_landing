import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public tab = 0
  isDownloadPage = false
  routeSubscribe:Subscription

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.routeSubscribe = this.activatedRoute.url.
    subscribe((res) => {
      const tabIndex = this.activatedRoute.snapshot.firstChild ? this.activatedRoute.snapshot.firstChild.data.tab : 0;
        this.setTab(tabIndex)
    });
  }

  ngOnDestroy(): void {
    this.routeSubscribe.unsubscribe()
  }

  setTab(tabIndex: number) {
    this.tab = tabIndex
  }
}

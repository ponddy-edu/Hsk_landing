import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit, OnDestroy {
  public tab = 0
  isDownloadPage = false
  routeSubscribe: Subscription
  activeHeaderTab = 'resources'

  constructor(private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(res => console.log(res))
    this.routeSubscribe = this.activatedRoute.url.subscribe((res) => {
      const tabIndex = this.activatedRoute.snapshot.data ? this.activatedRoute.snapshot.data.tab : 0;
      tabIndex >= 1 ? this.activeHeaderTab = 'resources' : this.activeHeaderTab = 'resources'
      console.log(this.activeHeaderTab)
      if (tabIndex < 2) {
        this.setTab(tabIndex)
      } else if (tabIndex === 2) {
        this.setTab(tabIndex)
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscribe.unsubscribe()
  }

  setTab(tabIndex: number) {
    this.tab = tabIndex
    if (tabIndex !== 2) {
      this.isDownloadPage = false
    }
  }

  setDownloadRe(downloadIndex: any) {
    this.isDownloadPage = downloadIndex
  }
}

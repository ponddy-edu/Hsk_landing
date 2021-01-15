import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public tab = 0
  constructor() { }

  ngOnInit(): void {
  }

  setTab(tabIndex: number) {
    this.tab = tabIndex
  }
}

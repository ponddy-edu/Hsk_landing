import {DOCUMENT} from '@angular/common';
import {Inject} from '@angular/core';
import {Component, OnInit, ViewChild} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-intro-test',
  templateUrl: './intro-test.component.html',
  styleUrls: ['./intro-test.component.scss']
})
export class IntroTestComponent implements OnInit {
  picRegistration = `https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/mobile/pic_Registration+Procedure_phone.png 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/web/pic_Registration+Procedure_web.png 1100w`

  panelOpenState = false;

  actvieItem = 'registrationProcedure'
  activeClass = 'procedureClass'

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id !== '2') {
        return
      }
      console.log(id)
      setTimeout(() => {
        this.actvieItem = 'testRegulation'
        this.menu_item(id)
      }, 300)
    });
  }

  menu_item(itemIndex: number) {
    switch (itemIndex) {
      case 1:
        this.actvieItem = 'registrationProcedure'
        this.activeClass = 'procedureClass'
        break
      case 2:
        this.actvieItem = 'testRegulation'
        this.activeClass = 'registrationClass'
        break
      case 3:
        this.actvieItem = 'scoreReport'
        this.activeClass = 'scoreClass'
        break
      case 4:
        this.actvieItem = 'testDiscipline'
        this.activeClass = 'disciplineClass'
        break
    }
    setTimeout(() => {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '#test-intro',
        duration: 500,
      });
    }, 100)
  }
}

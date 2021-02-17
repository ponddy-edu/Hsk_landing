import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro-test',
  templateUrl: './intro-test.component.html',
  styleUrls: ['./intro-test.component.scss']
})
export class IntroTestComponent implements OnInit {
  picRegistration = `https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/mobile/pic_Registration+Procedure_phone.svg 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/web/pic_Registration+Procedure_web.svg 1100w`

  panelOpenState = false;

  actvieItem = "registrationProcedure"
  activeClass = 'procedureClass'

  constructor() { }

  ngOnInit(): void {

  }

  menu_item(item_index: number) {
    switch (item_index) {
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
  }
}

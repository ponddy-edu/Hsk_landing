import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-intro-test',
  templateUrl: './intro-test.component.html',
  styleUrls: ['./intro-test.component.scss']
})
export class IntroTestComponent implements OnInit {
  picRegistration = `https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/mobile/pic_Registration+Procedure_phone.svg 767w,
  https://hsk-landing.s3-us-west-2.amazonaws.com/test/instructions/web/pic_Registration+Procedure_web.svg 1100w`

  panelOpenState = false;

  inlineTab = 'registrationProcedure'
  registrationProcedure = true;
  testRegulation = false;
  scoreReport = false;
  testDiscipline = false;

  procedureClass = "active";
  registrationClass = "";
  scoreClass = "";
  disciplineClass = "";


  constructor() {
  }

  ngOnInit(): void {

  }

  menu_item(item_index: number) {
    switch (item_index) {
      case 1:
        this.procedureClass = "active";
        this.registrationClass = "";
        this.scoreClass = "";
        this.disciplineClass = "";
        this.inlineTab = 'registrationProcedure'
        break
      case 2:
        this.procedureClass = "";
        this.registrationClass = "active";
        this.scoreClass = "";
        this.disciplineClass = "";
        this.inlineTab = 'testRegulation'
        break
      case 3:
        this.procedureClass = "";
        this.registrationClass = "";
        this.scoreClass = "active";
        this.disciplineClass = "";
        this.inlineTab = 'scoreReport'
        break
      case 4:
        this.procedureClass = "";
        this.registrationClass = "";
        this.scoreClass = "";
        this.disciplineClass = "active";
        this.inlineTab = 'testDiscipline'
        break
    }
  }

}

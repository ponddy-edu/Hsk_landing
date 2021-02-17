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

  registrationProcedure = true;
  testRegulation = false;
  scoreReport = false;
  testDiscipline = false;

  activeClass = "";
  procedureClass = "active";
  registrationClass = "";
  scoreClass = "";
  disciplineClass = "";



  actvieItem ="Registration Procedure"


  constructor() { }

  ngOnInit(): void {

  }

  menu_item(item_index: number) {
    switch (item_index) {
      case 1:
        this.procedureClass = "active";
        this.registrationClass = "";
        this.scoreClass = "";
        this.disciplineClass = "";
        this.registrationProcedure = true;
        this.testRegulation = false;
        this.scoreReport = false;
        this.testDiscipline = false;
        break
      case 2:
        this.procedureClass = "";
        this.registrationClass = "active";
        this.scoreClass = "";
        this.disciplineClass = "";
        this.registrationProcedure = false;
        this.testRegulation = true;
        this.scoreReport = false;
        this.testDiscipline = false;
        break
      case 3:
        this.procedureClass = "";
        this.registrationClass = "";
        this.scoreClass = "active";
        this.disciplineClass = "";
        this.registrationProcedure = false;
        this.testRegulation = false;
        this.scoreReport = true;
        this.testDiscipline = false;
        break
      case 4:
        this.procedureClass = "";
        this.registrationClass = "";
        this.scoreClass = "";
        this.disciplineClass = "active";
        this.registrationProcedure = false;
        this.testRegulation = false;
        this.scoreReport = false;
        this.testDiscipline = true;
        break
    }
  }

}

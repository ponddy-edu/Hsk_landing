import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollComponent } from './enroll.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ShareModule} from '../../components/share.module';
import { StepComponent } from './step/step.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

const routes: Routes = [
  {path: '', component: EnrollComponent},
];

@NgModule({
  declarations: [EnrollComponent, StepComponent],
  imports: [
    CommonModule,
    ShareModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class EnrollTestModule { }

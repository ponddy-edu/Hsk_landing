import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnrollComponent} from './enroll.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import {StepComponent} from './step/step.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {LandingComponent} from './landing/landing.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {UploadImageInfoComponent} from './step/upload-image-info/upload-image-info.component';

const routes: Routes = [
  {path: '', component: EnrollComponent},
];

@NgModule({
  declarations: [EnrollComponent, StepComponent, LandingComponent, UploadImageInfoComponent],
  imports: [
    CommonModule,
    ShareModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    MatCheckboxModule,
    MatMenuModule,
    MatDialogModule
  ],
  entryComponents: [
    UploadImageInfoComponent
  ],
})
export class EnrollTestModule {
}

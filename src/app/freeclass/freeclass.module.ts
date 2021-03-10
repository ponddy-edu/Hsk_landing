import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeclassComponent } from './freeclass.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {LandingComponent} from './landing/landing.component';
import { BookingComponent } from './booking/booking.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';



const routes: Routes = [
  {path: '', component: FreeclassComponent},
];

@NgModule({
  declarations: [FreeclassComponent, LandingComponent, BookingComponent],
  imports: [
    CommonModule,
    ShareModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(routes),
    MatCheckboxModule,
    LazyLoadImageModule,
  ]
})
export class FreeclassModule { }

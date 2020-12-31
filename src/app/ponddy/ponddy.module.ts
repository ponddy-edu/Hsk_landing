import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PonddyComponent} from './ponddy.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';

const routes: Routes = [
  {path: 'ponddy', component: PonddyComponent},
];

@NgModule({
  declarations: [PonddyComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ]
})
export class PonddyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/task-page.component';
import { HeaderComponent } from './componets/header/header.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TaskPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { MyFormComponent } from '../my-form/my-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule,
    MyFormComponent,
    ReactiveFormsModule
  ],
  declarations: [TaskPage, MyHeaderComponent, MyFormComponent]
})
export class TaskPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material-model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccessRoutingModule } from './access-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,MaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class AccessModule { }

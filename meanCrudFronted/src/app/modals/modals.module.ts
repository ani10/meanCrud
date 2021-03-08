import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateUserComponent } from './create-update-user/create-update-user.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [CreateUpdateUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateUpdateUserComponent
  ]
})
export class ModalsModule { }

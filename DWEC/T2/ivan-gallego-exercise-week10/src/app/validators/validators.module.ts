import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositiveValueDirective } from './positive-value.directive';
import { OneRequiredDirective } from './one-required.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PositiveValueDirective,
    OneRequiredDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PositiveValueDirective,
    OneRequiredDirective
  ]
})
export class ValidatorsModule { }

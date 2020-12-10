import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[spOneRequired]',
  providers: [{ provide: NG_VALIDATORS, useExisting: OneRequiredDirective, multi: true }]
})
export class OneRequiredDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    if (Object.values(control.value).every(v => v === false)) {
      return { 'oneRequired': true };
    }
    return null;
  }

}
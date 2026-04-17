import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appLongitudDirective]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LongitudDirective,
      multi: true
    }
  ]
})
export class LongitudDirective implements Validator {

  @Input('appLongitudDirective') requiredLength!: number;

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value == null) return null;

    return value.toString().length == this.requiredLength
      ? null
      : {
        exactLength: {
          requiredLength: this.requiredLength
        }
      };
  }
}

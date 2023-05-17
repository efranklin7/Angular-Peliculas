import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function miValidacion(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const x = Number(value);

    if (!isNaN(x)) {
      return {
        stringMust: {
          message: 'debe ser string',
        },
      };
    }
    return null;
  };
}

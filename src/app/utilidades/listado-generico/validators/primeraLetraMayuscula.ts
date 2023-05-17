import { AbstractControl, ValidatorFn } from '@angular/forms';

export function primeraLetraMayuscula(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = <string>control.value;
    if (!value) return null;
    if (value.length == 0) return null;
    if (value[0] != value[0].toUpperCase()) {
      return {
        primeraLetraMayuscula: {
          message: 'La primera letra debe ser mayuscula',
        },
      };
    }
    return null;
  };
}

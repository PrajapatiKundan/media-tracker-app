import { AbstractControl } from '@angular/forms';

export function mediaItemYearValidate(
  control: AbstractControl
): { [key: string]: any } | null {
  const year = parseInt(control.value, 10); // Here 10 indicate decimal number. default is 0x for hexadecimal value
  const minYear = 1900;
  const maxYear = new Date().getFullYear();

  if (year >= minYear && year <= maxYear) {
    return null;
  } else {
    return {
      invalidYear: {
        minYear,
        maxYear,
      },
    };
  }
}

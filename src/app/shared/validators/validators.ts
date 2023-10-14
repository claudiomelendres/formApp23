import { FormControl, ValidationErrors } from '@angular/forms';

export const cantBeStrider = (
  control: FormControl
): ValidationErrors | null => {
  const value = control.value?.trim().toLowerCase();
  if (value === 'strider') {
    return {
      cantBeStrider: true,
    };
  }
  return null;
};

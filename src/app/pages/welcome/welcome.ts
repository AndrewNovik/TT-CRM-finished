import { Validators } from '@angular/forms';

export const initialLoginValue = {
  login: [
    '',
    [Validators.required, Validators.minLength(3), Validators.max(128)],
  ],
  pass: ['', [Validators.required, Validators.min(3), Validators.max(128)]],
};

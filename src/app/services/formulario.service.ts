import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  marcarCamposInvalidos(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      if (control?.invalid) {
        control.markAsDirty();
        control.markAsTouched();
      }
    });
  }
}

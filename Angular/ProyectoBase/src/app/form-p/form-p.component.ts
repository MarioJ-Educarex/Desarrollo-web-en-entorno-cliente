import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-form-p',
  templateUrl: './form-p.component.html',
  styleUrls: ['./form-p.component.css'],
})
export class FormPComponent implements OnInit {
  miform!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miform = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fecha: ['', Validators.required],
        trabajo: ['', Validators.required],
        ps: [
          '',
          [
            Validators.required,
            Validators.pattern('^[A-Z][A-Za-z0-9]{8}[0-9]$'),
          ],
        ],
        ps_r: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator
      }
    );
  }

  passwordMatchValidator(fr: FormGroup) {
    const ps = fr.get('ps')!.value;
    console.log(ps);
    console.log('PASSWORD 1');

    const ps_r = fr.get('ps_r')!.value;
    console.log(ps_r);
    console.log('PASSWORD 2');

    if (ps !== '') {
      if (ps !== ps_r) {
        fr.get('ps_r')?.setErrors({ mismatch: true });
      } else {
        fr.get('ps_r')?.setErrors(null);
      }
    }
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  validarClave(fr: FormGroup) {
    // alert('validarClave');
    const ps = fr.get('ps')!.value;
    const ps_r = fr.get('ps_r')!.value;

    if (ps == ps_r) {
      const comprobado = true;
    }
  }

  onSubmit() {
    if (this.miform.valid) {
      alert('Formulario válido');
      console.log(this.miform.value);
    } else {
      alert('Formulario inválido');
    }
  }
}

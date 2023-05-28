import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-crear-targeja',
  templateUrl: './crear-targeja.component.html',
  styleUrls: ['./crear-targeja.component.css']
})
export class CrearTargejaComponent {
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', Validators.required],
      fechaExpiracion: ['', Validators.required],
      cvv: ['', Validators.required],
    })
  }

  crearTarjeta() {
    console.log(this.form)
  }
}

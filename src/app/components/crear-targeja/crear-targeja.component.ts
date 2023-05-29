import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TarjetaCredito} from "../../models/TarjetaCredito";

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
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16),]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }

  crearTarjeta() {
    console.log(this.form)
    const TARJETA: TarjetaCredito = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      cvv: this.form.value.cvv,
      fechaExpiracion: this.form.value.fechaExpiracion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    console.log(TARJETA)
  }
}

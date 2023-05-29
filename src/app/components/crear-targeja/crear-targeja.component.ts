import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TarjetaCredito} from "../../models/TarjetaCredito";
import {TarjetaService} from "../../services/tarjeta.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-crear-targeja',
  templateUrl: './crear-targeja.component.html',
  styleUrls: ['./crear-targeja.component.css']
})
export class CrearTargejaComponent implements OnInit {
  form: FormGroup
  loading = false
  titulo = 'Agregar tarjeta'
  id?: string

  constructor(private fb: FormBuilder, private _tarjetaService: TarjetaService, private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16),]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }

  guardarTarjeta() {
    console.log(this.form)
    if (!this.id) {
      //crear
      this.agregarTarjeta()
    } else {
      //update
      this.editarTarjeta(this.id)
    }
  }

  agregarTarjeta() {
    const TARJETA: TarjetaCredito = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      cvv: this.form.value.cvv,
      fechaExpiracion: this.form.value.fechaExpiracion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true
    this._tarjetaService.guardarTarjeta(TARJETA).then(() => {
      this.loading = false
      this.toastr.success('La tarjeta fue registrada con éxito!', 'Tarjeta registrada')
      console.log('registrado')
      this.form.reset()
    }, error => {
      this.loading = false
      this.toastr.error('Opps.. ocurrió un error', 'Error')
      console.log(error)
    })
  }

  ngOnInit(): void {
    this._tarjetaService.getTarjetaEdit().subscribe(data => {
      console.log(data)
      this.id = data.id
      this.titulo = 'Editar tarjeta'
      this.form.patchValue({
        titular: data.titular,
        numeroTarjeta: data.numeroTarjeta,
        cvv: data.cvv,
        fechaExpiracion: data.fechaExpiracion,
      })
    })
  }

  private editarTarjeta(id: string) {
    const TARJETA: any = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      cvv: this.form.value.cvv,
      fechaExpiracion: this.form.value.fechaExpiracion,
      fechaActualizacion: new Date()
    }
    this.loading = true
    this._tarjetaService.editarTarjeta(id, TARJETA).then(() => {
      this.loading = false
      this.titulo = 'Agregar tarjeta'
      this.form.reset()
      this.id = undefined
      this.toastr.info('La tarjeta fue actualizada con éxito', 'Registro actualizado')
    }, error => {
      console.log(error)
    })
  }
}

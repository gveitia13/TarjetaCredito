import {Component, OnInit} from '@angular/core';
import {TarjetaService} from "../../services/tarjeta.service";
import {TarjetaCredito} from "../../models/TarjetaCredito";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {
  listTarjetas: TarjetaCredito[] = []
  loading = false

  constructor(private _tarjetaService: TarjetaService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.obtenerTarjetas()
  }

  private obtenerTarjetas() {
    this.loading = true
    this._tarjetaService.obtenerTarjetas().subscribe(data => {
      this.listTarjetas = []
      this.loading = false
      data.forEach((e: any) => {
        this.listTarjetas.push({
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        })
      })
      console.log(this.listTarjetas)
    })
  }

  eliminarTarjeta(id: any) {
    this._tarjetaService.eliminarTarjeta(id).then(() => {
      this.toastr.error('La tarjeta fue eliminada con éxito', 'Registro eliminado')
    }, error => {
      console.log(error)
      this.toastr.error('Ocurrió un error', 'Error')
    })
  }

  editarTarjeta(tarjeta: TarjetaCredito) {
    this._tarjetaService.addTarjetaEdit(tarjeta)
  }
}

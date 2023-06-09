import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import {AppComponent} from './app.component';
import {CrearTargejaComponent} from './components/crear-targeja/crear-targeja.component';
import {ListarTarjetaComponent} from './components/listar-tarjeta/listar-tarjeta.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.development";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";

@NgModule({
  declarations: [
    AppComponent,
    CrearTargejaComponent,
    ListarTarjetaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

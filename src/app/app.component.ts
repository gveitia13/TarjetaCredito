import {Component, inject} from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TarjetaCredito';
  // firestore: Firestore = inject(Firestore);
  // items$: Observable<any[]>;

  constructor() {
    // const aCollection = collection(this.firestore, 'items')
    // this.items$ = collectionData(aCollection);
  }
}

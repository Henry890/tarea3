import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
  IonItem, IonInput, IonButton, IonList, IonLabel,
} from '@ionic/angular';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
    IonMenuButton, IonItem, IonInput, IonButton, IonList, IonLabel],
})
export class TablaPage {
  numero: number | null = null;
  filas: string[] = [];

  generar() {
    this.filas = [];
    if (this.numero === null) return;
    const n = Number(this.numero);
    for (let i = 1; i <= 13; i++) {
      this.filas.push(`${n} x ${i} = ${n * i}`);
    }
  }
}
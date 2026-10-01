import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
  IonItem, IonInput, IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
    IonMenuButton, IonItem, IonInput, IonButton],
})
export class SumadoraPage {
  num1: number | null = null;
  num2: number | null = null;
  resultado: number | null = null;

  sumar() {
    this.resultado = Number(this.num1 ?? 0) + Number(this.num2 ?? 0);
  }
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
  IonItem, IonInput, IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
    IonMenuButton, IonItem, IonInput, IonButton],
})
export class TraductorPage {
  numero: number | null = null;
  texto = '';
  error = '';

  private base = [
    'cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
    'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete',
    'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés',
    'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve',
  ];
  private decenas = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  private centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos',
    'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  traducir() {
    this.texto = '';
    this.error = '';
    const n = Number(this.numero);
    if (this.numero === null || !Number.isInteger(n) || n < 1 || n > 1000) {
      this.error = 'Ingrese un número entero entre 1 y 1000.';
      return;
    }
    this.texto = this.convertir(n);
  }

  private convertir(n: number): string {
    if (n === 1000) return 'mil';
    if (n < 30) return this.base[n];
    if (n < 100) {
      const d = Math.floor(n / 10);
      const u = n % 10;
      return this.decenas[d] + (u ? ' y ' + this.base[u] : '');
    }
    if (n === 100) return 'cien';
    const c = Math.floor(n / 100);
    const r = n % 100;
    return this.centenas[c] + (r ? ' ' + this.convertir(r) : '');
  }
}
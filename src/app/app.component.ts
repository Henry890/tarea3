import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader,
  IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  personOutline, addCircleOutline, textOutline, gridOutline, videocamOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent,
    IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Inicial', url: '/inicio', icon: 'person-outline' },
    { title: 'Sumadora', url: '/sumadora', icon: 'add-circle-outline' },
    { title: 'Número a Letras', url: '/traductor', icon: 'text-outline' },
    { title: 'Tabla de Multiplicar', url: '/tabla', icon: 'grid-outline' },
    { title: 'Experiencia Personal', url: '/experiencia', icon: 'videocam-outline' },
  ];

  constructor() {
    addIcons({ personOutline, addCircleOutline, textOutline, gridOutline, videocamOutline });
  }
}
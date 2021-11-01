import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { initializeApp } from "firebase/app";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ThemesPage } from './pages/themes/themes.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { ModalFichesPage } from './pages/modals/modal-fiches/modal-fiches.page';
import { FichesPage } from './pages/fiches/fiches.page';

const firebaseConfig = {
  apiKey: "AIzaSyAoWMYqLJXfLrKJojlFDXMopZoDoK4KQ9Y",
  authDomain: "lucie-memo.firebaseapp.com",
  projectId: "lucie-memo",
  storageBucket: "lucie-memo.appspot.com",
  messagingSenderId: "356722738230",
  appId: "1:356722738230:web:a0edd9bd860f53b0c20497",
  databaseURL: "https://lucie-memo-default-rtdb.europe-west1.firebasedatabase.app"
};
const app = initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    FlipCardComponent,
    ThemesPage,
    ModalFichesPage,
    FichesPage,
  ],
  entryComponents: [],
  imports:
  [ BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

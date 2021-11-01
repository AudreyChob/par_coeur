import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFichesPageRoutingModule } from './modal-fiches-routing.module';

import { ModalFichesPage } from './modal-fiches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFichesPageRoutingModule
  ],
  declarations: [ModalFichesPage]
})
export class ModalFichesPageModule {}

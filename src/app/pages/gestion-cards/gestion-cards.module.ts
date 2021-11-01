import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCardsPageRoutingModule } from './gestion-cards-routing.module';

import { GestionCardsPage } from './gestion-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCardsPageRoutingModule
  ],
  declarations: [GestionCardsPage]
})
export class GestionCardsPageModule {}

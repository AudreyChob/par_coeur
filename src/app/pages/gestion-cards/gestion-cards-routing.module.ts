import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCardsPage } from './gestion-cards.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCardsPageRoutingModule {}
